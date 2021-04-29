import * as React from 'react';

type DrawerProps = {
  show: boolean;
  children: React.ReactNode;
};

const Drawer = ({ show, children }: DrawerProps) => {
  return (
    <section
      className={`p-8 fixed top-0 w-full h-96 md:h-80 z-20 bg-white shadow transform ${
        show ? 'translate-y-0' : '-translate-y-96 md:-translate-y-80'
      } transition-transform duration-500 ease`}
    >
      {children}
    </section>
  );
};

export default Drawer;
