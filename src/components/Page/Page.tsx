import * as React from 'react';
import styles from './Page.module.scss';

const Page = ({ children }: { children: React.ReactNode }) => (
  <article className={styles.Page}>{children}</article>
);

export default Page;
