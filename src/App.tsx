import React, { useState } from 'react';
import usePropertyList from './hooks/usePropertyList';
import Drawer from './components/Drawer/Drawer';
import DrawerBackdrop from './components/DrawerBackdrop/DrawerBackdrop';
import FilterMenu from './components/FilterMenu/FilterMenu';
import Properties from './components/Properties/Properties';
import Header from './components/Header/Header';
import Page from './components/Page/Page';
import Main from './components/Main/Main';

const App = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [cityFilter, setCityFilter] = useState<string>('');
  const [guestsFilter, setGuestsFilter] = useState<number>(2);
  const propertyList = usePropertyList(cityFilter, guestsFilter);

  return (
    <Page>
      <Drawer show={showFilter}>
        <FilterMenu
          cityFilter={cityFilter}
          filterByCity={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCityFilter(e.target.value)
          }
          guestsFilter={guestsFilter}
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
