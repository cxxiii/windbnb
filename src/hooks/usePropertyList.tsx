import { useState, useEffect } from 'react';
import { PropertyItem, PropertyList } from '../../types';
import debounce from 'lodash.debounce';

const cache: Record<string, PropertyList> = {};

export default function usePropertyList(
  cityFilter: string,
  guestsFilter: number
): PropertyList | null {
  const [propertyList, setPropertyList] = useState<null | PropertyList>(null);

  useEffect(() => {
    async function getProperties(): Promise<void> {
      // setPropertyList([]);
      const raw = await fetch('stays.json');
      let properties = await raw.json();

      if (cityFilter) {
        properties = properties.filter(
          (p: PropertyItem) => p.city === cityFilter
        );
        cache[cityFilter] = properties;

        console.log(cache);
      }
      if (guestsFilter) {
        properties = properties.filter(
          (p: PropertyItem) => p.beds >= guestsFilter
        );
        cache[guestsFilter] = properties;
        console.log(cache);
      }

      if (cityFilter && guestsFilter) {
        cache[`${cityFilter}-${guestsFilter}`] = properties;
      }

      setPropertyList(properties);
    }

    if (cache[cityFilter]) {
      setPropertyList(cache[cityFilter]);
      console.log('used cache');
    } else if (cache[guestsFilter]) {
      setPropertyList(cache[guestsFilter]);
      console.log('used cache');
    } else if (cache[`${cityFilter}-${guestsFilter}`]) {
      setPropertyList(cache[`${cityFilter}-${guestsFilter}`]);
      console.log('used cache');
    }

    if (!propertyList) {
      getProperties();
    } else {
      const debouncedFilter = debounce(getProperties, 500);
      debouncedFilter();
    }
  }, [cityFilter, guestsFilter]);

  return propertyList;
}
