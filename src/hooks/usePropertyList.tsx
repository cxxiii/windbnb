import { useState, useEffect } from 'react';
import { PropertyItem, PropertyList } from '../../types';
import debounce from 'lodash.debounce';
// import stays from '../../assets/stays.json'

const cache: Record<string, PropertyList> = {};

export default function usePropertyList(
  cityFilter: string,
  guestsFilter: number
): PropertyList | null {
  const [propertyList, setPropertyList] = useState<null | PropertyList>(null);

  let initLoad = false;
  async function getProperties(): Promise<void> {
    const raw = await fetch('/assets/stays.json');
    console.log(raw)
    let properties = await raw.json();

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
