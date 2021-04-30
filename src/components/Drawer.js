import * as React from 'react';
const Drawer = ({ show, children }) => {
    return (React.createElement("section", { className: `p-8 fixed top-0 w-full h-96 md:h-80 z-20 bg-white shadow transform ${show ? 'translate-y-0' : '-translate-y-96 md:-translate-y-80'} transition-transform duration-500 ease` }, children));
};
export default Drawer;
