import * as React from 'react';
import styles from './Main.module.scss'

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => (
  <section className={styles.Main}>
    {children}
  </section>
);

export default Main;
