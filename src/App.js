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
    const [showFilter, setShowFilter] = useState(false);
    const [cityFilter, setCityFilter] = useState('');
    const [guestsFilter, setGuestsFilter] = useState(2);
    const propertyList = usePropertyList(cityFilter, guestsFilter);
    return (React.createElement(Page, null,
        React.createElement(Drawer, { show: showFilter },
            React.createElement(FilterMenu, { cityFilter: cityFilter, filterByCity: (e) => setCityFilter(e.target.value), guestsFilter: guestsFilter, filterByGuests: (e) => setGuestsFilter(Number(e.target.value)) })),
        showFilter && (React.createElement(DrawerBackdrop, { closeDrawer: () => setShowFilter((prev) => !prev) })),
        React.createElement(Main, null,
            React.createElement(Header, { openFilterDrawer: () => setShowFilter((prev) => !prev) }),
            React.createElement(Properties, { propertyList: propertyList }))));
};
export default App;
