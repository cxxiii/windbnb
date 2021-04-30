import * as React from 'react';
import PropertyCard from './PropertyCard';
import { PropertyList, PropertyCard as PropCardTypes } from "../../types";

type PropertiesProps = {
  propertyList: PropertyList | null
}

const Properties = ({propertyList}: PropertiesProps) => {
  return (
    <main>
      <span className="mb-6 flex justify-between items-center">
        <h2 className="font-semibold text-lg">Stays in Finland</h2>
        {propertyList && (
          <h3 className="font-medium">{propertyList.length} stays</h3>
        )}
      </span>
      <section className="grid md:grid-cols-3 place-items-center gap-x-12 gap-y-10 md:gap-y-14">
        {propertyList &&
          propertyList.map((property: PropCardTypes) => (
            <PropertyCard
              key={property.title}
              photo={property.photo}
              title={property.title}
              superHost={property.superHost}
              beds={property.beds}
              type={property.type}
              rating={property.rating}
            />
          ))}
      </section>
    </main>
  );
};

export default Properties
