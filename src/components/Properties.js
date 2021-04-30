import * as React from 'react';
import PropertyCard from './PropertyCard';
const Properties = ({ propertyList }) => {
    return (React.createElement("main", null,
        React.createElement("span", { className: "mb-4 flex justify-between items-center" },
            React.createElement("h2", { className: "font-semibold text-lg" }, "Stays in Finland"),
            propertyList && (React.createElement("h3", { className: "font-medium" },
                propertyList.length,
                " stays"))),
        React.createElement("section", { className: "grid md:grid-cols-3 items-start gap-x-12 gap-y-10 md:gap-y-14" }, propertyList &&
            propertyList.map((property) => (React.createElement(PropertyCard, { key: property.title, photo: property.photo, title: property.title, superHost: property.superHost, beds: property.beds, type: property.type, rating: property.rating }))))));
};
export default Properties;
