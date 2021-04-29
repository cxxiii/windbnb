import {useState, useEffect} from 'react'
import { PropertyItem, PropertyList } from "../../types";
import debounce from 'lodash.debounce';

export default function useFetchProperties(cityFilter: string, guestsFilter: number) {
  const [propertyList, setPropertyList] = useState<null | PropertyList>(null);

  const cache: Record<string, PropertyList> = {} 

    useEffect(() => {
    if (cache[cityFilter]) {
      setPropertyList(cache[cityFilter]);
    } 
    if (cache[guestsFilter]) {
      setPropertyList(cache[guestsFilter]);
    } else if (!propertyList) {
      getProperties()
    } else {

  const debouncedFilter = debounce(getProperties, 1000);
  debouncedFilter()
    }

  async function getProperties(): Promise<void> {
    setPropertyList([])
    const raw = await fetch('stays.json');
    let properties = await raw.json();

    if (cityFilter) {
      properties = properties.filter(
        (p: PropertyItem) => p.city === cityFilter
      );
      cache[cityFilter] = properties
    }
    if (guestsFilter) {
      properties = properties.filter(
        (p: PropertyItem) => p.beds >= guestsFilter
      );
      cache[guestsFilter] = properties
    }
    

    setPropertyList(properties);
  }}, [cityFilter, guestsFilter])

}
