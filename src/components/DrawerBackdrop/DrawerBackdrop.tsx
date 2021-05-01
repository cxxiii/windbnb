import * as React from 'react';
import styles from './DrawerBackdrop.module.scss';

const DrawerBackdrop = ({
  closeDrawer,
}: {
  closeDrawer: React.MouseEventHandler;
}) => <div onClick={closeDrawer} className={styles.DrawerBackdrop} />;

export default DrawerBackdrop;
