import React, { useEffect, useState } from 'react';
import {
  PropertyItem,
  PropertyList,
  PropertyCard as PropCardTypes,
} from '../types';
import PropertyCard from './components/PropertyCard';
import Drawer from './components/Drawer';
import DrawerBackdrop from './components/DrawerBackdrop';
import CityListItem from './components/CityListItem';
import debounce from 'lodash.debounce';

const App = () => {
  const [propertyList, setPropertyList] = useState<null | PropertyList>(null);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [cityFilter, setCityFilter] = useState<string>('');
  const [guestsFilter, setGuestsFilter] = useState<null | number>(null);

  async function getProperties(): Promise<void> {
    const raw = await fetch('stays.json');
    let properties = await raw.json();
    if (cityFilter) {
      properties = properties.filter(
        (p: PropertyItem) => p.city === cityFilter
      );
    }
    if (guestsFilter) {
      properties = properties.filter(
        (p: PropertyItem) => p.beds >= guestsFilter
      );
    }
    setPropertyList(properties);
  }

  useEffect(() => {
    getProperties();
  }, []);

  const debouncedFilter = debounce(getProperties, 1000);

  useEffect(() => {
    debouncedFilter();
  }, [cityFilter, guestsFilter]);

  return (
    <div className="mb-16 text-gray-900 text-shadow-sm subpixel-antialiased">
      <Drawer
        className="p-8 w-full flex flex-col items-center content=center"
        show={showFilter}
      >
        <article className="flex w-full justify-around">
          <section className="flex flex-col place-items-evenly">
            <input
              type="text"
              className="p-2"
              value={cityFilter}
              placeholder="Filter by city"
              onChange={(e) => setCityFilter(e.target.value)}
            />
            <ul className="flex flex-col h-52 place-content-evenly">
              <CityListItem city="Helsinki, Finland" />
              <CityListItem city="Turku, Finland" />
              <CityListItem city="Oulu, Finland" />
              <CityListItem city="Vaasa, Finland" />
            </ul>
          </section>
          <section className="flex flex-col place-content-center">
            <label className="mb-2" htmlFor="guestInput">
              Filter by number of guests
            </label>
            <input
              id="guestInput"
              type="number"
              className="h-10"
              value={Number(guestsFilter)}
              onChange={(e) => setGuestsFilter(Number(e.target.value))}
            />
          </section>
        </article>
      </Drawer>
      {showFilter && (
        <DrawerBackdrop closeDrawer={() => setShowFilter((prev) => !prev)} />
      )}
      <article className="grid place-content-center md:container md:mx-auto subpixel-antialiased">
        <header className="flex justify-between items-center mt-4 mb-8">
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-900 h-16 w-16"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <h1 className="text-[4rem] inline-block font-secondary font-extrabold tracking-tighter">
              Windbnb{' '}
            </h1>
          </span>
          <button
            className="p-4 rounded-lg shadow-xl"
            onClick={() => setShowFilter((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </header>
        <span className="mb-4 flex justify-between items-center">
          <h2 className="font-semibold text-lg">Stays in Finland</h2>
          {propertyList && (
            <h3 className="font-medium">{propertyList.length} stays</h3>
          )}
        </span>
        <section className="grid md:grid-cols-3 gap-x-12 gap-y-14">
          {propertyList &&
            propertyList.map((property: PropCardTypes) => (
              <PropertyCard
                key={property.title}
                photo={property.photo}
                title={property.title}
                superHost={property.superHost}
                beds={property.beds}
                type={property.type}
                rating={property.rating}
              />
            ))}
        </section>
      </article>
    </div>
  );
};

export default App;
