import React, { useState } from 'react';
import usePropertyList from './hooks/usePropertyList';
import Drawer from './components/Drawer';
import DrawerBackdrop from './components/DrawerBackdrop';
import FilterMenu from './components/FilterMenu';
import Properties from './components/Properties';
import Header from './components/Header';
import Page from './components/Page';
import Main from './components/Main';

const App = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [cityFilter, setCityFilter] = useState<string>('');
  const [guestsFilter, setGuestsFilter] = useState<null | number>(null);
  const propertyList = usePropertyList(cityFilter, Number(guestsFilter));

  return (
    <Page>
      <Drawer show={showFilter}>
        <FilterMenu
          cityFilter={cityFilter}
          filterByCity={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCityFilter(e.target.value)
          }
          guestsFilter={Number(guestsFilter)}
          filterByGuests={(e: React.ChangeEvent<HTMLInputElement>) =>
            setGuestsFilter(Number(e.target.value))
          }
        />
      </Drawer>
      {showFilter && (
        <DrawerBackdrop closeDrawer={() => setShowFilter((prev) => !prev)} />
      )}
      <Main>
        <Header openFilterDrawer={() => setShowFilter((prev) => !prev)} />
        <Properties propertyList={propertyList} />
      </Main>
    </Page>
  );
};

export default App;
