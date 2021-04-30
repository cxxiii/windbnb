import * as React from 'react'
import CityListItem from "./CityListItem"

type FilterMenuProps = {
  cityFilter: string
  filterByCity: React.ChangeEventHandler;
  guestsFilter: number
  filterByGuests: React.ChangeEventHandler;
}

const FilterMenu = ({cityFilter, filterByCity, guestsFilter, filterByGuests }: FilterMenuProps) => {
  return (
        <article className="flex flex-col md:flex-row w-full justify-around">
          <section className="flex flex-col place-items-evenly mb-2 md:mb-0">
            <input
              type="text"
              className="mt-0 block text-lg md:text-xl px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
              value={cityFilter}
              placeholder="Filter by city"
              onChange={filterByCity}
            />
            <ul className="flex flex-col h-52 place-content-evenly">
              <CityListItem city="Helsinki, Finland" />
              <CityListItem city="Turku, Finland" />
              <CityListItem city="Oulu, Finland" />
              <CityListItem city="Vaasa, Finland" />
            </ul>
          </section>
          <section className="flex flex-col place-content-center place-items-center">
            <label className="mb-2 text-gray-600" htmlFor="guestInput">
    Number of guests
            </label>
            <input
              id="guestInput"
              type="number"
    className="text-center mt-0 block text-lg md:text-3xl border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black w-1/5"
              value={Number(guestsFilter)}
              min={0}
              onChange={filterByGuests}
            />
          </section>
        </article>
        )
}

export default FilterMenu
