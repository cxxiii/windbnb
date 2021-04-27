import React, { useEffect, useState } from 'react';
import { PropertyItem, PropertyList } from '../types';

const App = () => {
  const [propertyList, setPropertyList] = useState<null | PropertyList>(null);

  async function getProperties(): Promise<void> {
    const raw = await fetch('stays.json');
    const properties = await raw.json();
    setPropertyList(properties);
  }

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <main className="grid place-content-center container max-w-6xl mx-auto px-4 md:px-0">
      <h2 className="font-semibold text-lg mt-4 mb-2">Stays in Finland</h2>
      <section className="grid grid-cols-3 gap-4">
        {propertyList &&
          propertyList.map((property: PropertyItem) => (
            <img
              className="w-80 rounded-lg"
              key={property.photo}
              src={property.photo}
              alt={property.title}
            />
          ))}
      </section>
    </main>
  );
};

export default App;
