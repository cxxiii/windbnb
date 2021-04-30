import * as React from 'react';
import CityListItem from "./CityListItem";
const FilterMenu = ({ cityFilter, filterByCity, guestsFilter, filterByGuests }) => {
    return (React.createElement("article", { className: "flex flex-col md:flex-row w-full justify-around" },
        React.createElement("section", { className: "flex flex-col place-items-evenly mb-2 md:mb-0" },
            React.createElement("input", { type: "text", className: "mt-0 block text-lg md:text-xl px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black", value: cityFilter, placeholder: "Filter by city", onChange: filterByCity }),
            React.createElement("ul", { className: "flex flex-col h-52 place-content-evenly" },
                React.createElement(CityListItem, { city: "Helsinki, Finland" }),
                React.createElement(CityListItem, { city: "Turku, Finland" }),
                React.createElement(CityListItem, { city: "Oulu, Finland" }),
                React.createElement(CityListItem, { city: "Vaasa, Finland" }))),
        React.createElement("section", { className: "flex flex-col place-content-center place-items-center" },
            React.createElement("label", { className: "mb-2 text-gray-600", htmlFor: "guestInput" }, "Number of guests"),
            React.createElement("input", { id: "guestInput", type: "number", className: "text-center mt-0 block text-lg md:text-3xl border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black w-1/5", value: Number(guestsFilter), min: 0, onChange: filterByGuests }))));
};
export default FilterMenu;
