import { useState, useEffect } from 'react';
import { PropertyItem, PropertyList } from '../../types';
import debounce from 'lodash.debounce';

const cache: Record<string, PropertyList> = {};

export default function usePropertyList(
  cityFilter: string,
  guestsFilter: number
): PropertyList | null {
  const [propertyList, setPropertyList] = useState<null | PropertyList>(null);
  let initLoad = false;

  async function getProperties(): Promise<void> {
    const raw = await fetch('/stays.json');
    let properties = await raw.json();

    if (guestsFilter) {
      properties = properties.filter(
        (p: PropertyItem) => p.maxGuests >= guestsFilter
      );
      if (properties.length && !cache[guestsFilter]) {
        cache[guestsFilter] = properties;
      }
    }

    if (cityFilter && guestsFilter) {
      properties = properties.filter(
        (p: PropertyItem) =>
          p.city === cityFilter && p.maxGuests >= guestsFilter
      );
      if (properties.length && !cache[`${cityFilter}-${guestsFilter}`]) {
        cache[`${cityFilter}-${guestsFilter}`] = properties;
      }
    }

    setPropertyList(properties);
  }

  useEffect(() => {
    let fetchedFromCache = false;

    if (cache[`${cityFilter}-${guestsFilter}`]) {
      setPropertyList(cache[`${cityFilter}-${guestsFilter}`]);
      fetchedFromCache = true;
    }

    if (!propertyList && !initLoad) {
      getProperties();
      initLoad = true;
    } else if (!fetchedFromCache) {
      const debouncedFilter = debounce(getProperties, 500);
      debouncedFilter();
    }
  }, [cityFilter, guestsFilter]);

  return propertyList;
}
