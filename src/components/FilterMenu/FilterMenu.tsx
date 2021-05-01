import * as React from 'react';
import CityListItem from '../CityListItem/CityListItem';
import styles from './FilterMenu.module.scss'

type FilterMenuProps = {
  cityFilter: string;
  filterByCity: React.ChangeEventHandler;
  guestsFilter: number;
  filterByGuests: React.ChangeEventHandler;
};

const FilterMenu = ({
  cityFilter,
  filterByCity,
  guestsFilter,
  filterByGuests,
}: FilterMenuProps) => {
  return (
    <article className={styles.FilterMenu}>
      <section className={styles.FilterMenu__cityFilter}>
        <input
          type="text"
          value={cityFilter}
          placeholder="Filter by city"
          onChange={filterByCity}
        />
        <ul>
          <CityListItem city="Helsinki, Finland" />
          <CityListItem city="Turku, Finland" />
          <CityListItem city="Oulu, Finland" />
          <CityListItem city="Vaasa, Finland" />
        </ul>
      </section>
      <section className={styles.FilterMenu__guestsFilter}>
        <label htmlFor="guestInput">
          Number of guests
        </label>
        <input
          id="guestInput"
          type="number"
          value={Number(guestsFilter)}
          min={0}
          onChange={filterByGuests}
        />
      </section>
    </article>
  );
};

export default FilterMenu;
