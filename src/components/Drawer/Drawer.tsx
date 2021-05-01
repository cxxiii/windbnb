import * as React from 'react';
import styles from './Drawer.module.scss'
import classNames from 'classnames'

type DrawerProps = {
  show: boolean;
  children: React.ReactNode;
};

const Drawer = ({ show, children }: DrawerProps) => {
  return (
    <section
    className={classNames(styles.Drawer, show ? styles.drawerOpen : styles.drawerClosed)}
    >
      {children}
    </section>
  );
};

export default Drawer;
