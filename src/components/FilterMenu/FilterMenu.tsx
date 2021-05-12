import * as React from 'react';
import CityListItem from '../CityListItem/CityListItem';
import styles from './FilterMenu.module.scss';

type FilterMenuProps = {
  cityFilter: string;
  filterByCity: React.ChangeEventHandler;
  filterByCityLI: Function;
  guestsFilter: number;
  filterByGuests: React.ChangeEventHandler;
};

const FilterMenu = ({
  cityFilter,
  filterByCity,
  filterByCityLI,
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
          <CityListItem
            onClick={() => filterByCityLI('Helsinki')}
            city="Helsinki, Finland"
          />
          <CityListItem
            onClick={() => filterByCityLI('Turku')}
            city="Turku, Finland"
          />
          <CityListItem
            onClick={() => filterByCityLI('Oulu')}
            city="Oulu, Finland"
          />
          <CityListItem
            onClick={() => filterByCityLI('Vaasa')}
            city="Vaasa, Finland"
          />
        </ul>
      </section>
      <section className={styles.FilterMenu__guestsFilter}>
        <label htmlFor="guestInput">Number of guests</label>
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
