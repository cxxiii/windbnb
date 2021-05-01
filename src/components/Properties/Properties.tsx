import * as React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import { PropertyList, PropertyCard as PropCardTypes } from '../../../types';
import styles from './Properties.module.scss'

const Properties = ({
  propertyList,
}: {
  propertyList: PropertyList | null;
}) => {
  return (
    <main>
      <span className={styles.Properties__info}>
        <h2>Stays in Finland</h2>
        {propertyList && (
          <h3>{propertyList.length} stays</h3>
        )}
      </span>
      <section className={styles.Properties__propertiesGrid}>
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

export default Properties;
