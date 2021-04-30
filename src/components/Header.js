import * as React from 'react';
const Header = ({ openFilterDrawer }) => {
    return (React.createElement("header", { className: "flex flex-col md:flex-row justify-around md:justify-between items-center mt-8 md:mt-4 mb-8" },
        React.createElement("span", { className: "flex items-center mb-4 md:mb-0" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "text-green-900 h-16 w-16", viewBox: "0 0 20 20", fill: "currentColor" },
                React.createElement("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" })),
            React.createElement("h1", { className: "text-6xl md:text-[4rem] inline-block font-secondary font-extrabold tracking-tighter" }, "Finbnb")),
        React.createElement("button", { className: "transform hover:scale-105 hover:bg-green-900 hover:text-white transition duration-200 p-4 rounded-lg shadow-xl hover:shadow-inner", onClick: openFilterDrawer },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", viewBox: "0 0 20 20", fill: "currentColor" },
                React.createElement("path", { fillRule: "evenodd", d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z", clipRule: "evenodd" })))));
};
export default Header;