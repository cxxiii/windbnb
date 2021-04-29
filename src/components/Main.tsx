import * as React from 'react';

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => (
  <section className="px-4 md:px-0 grid place-content-center md:container md:mx-auto">
    {children}
  </section>
);

export default Main;
