import * as React from 'react';

type DrawerProps = {
  show: boolean;
  children: React.ReactChild | React.ReactChild[] | React.ReactChildren;
  className?: string;
};

const Drawer = ({ show, children, className }: DrawerProps) => {

  return (
    <section
    className={`fixed top-0 w-full h-80 z-20 bg-white shadow transform ${
        show ? 'translate-y-0' : '-translate-y-80'
      } transition-transform duration-500 ease ${className}`}
    >
      {children}
    </section>
  );
};

export default Drawer;
