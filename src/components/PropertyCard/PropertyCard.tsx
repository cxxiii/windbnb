import { PropertyCard as PropCardTypes } from '../../../types';
import * as React from 'react';
import styles from './PropertyCard.module.scss';

const PropertyCard = ({
  title,
  type,
  photo,
  rating,
  superHost,
  beds,
}: PropCardTypes) => {
  return (
    <article className={styles.PropertyCard}>
      <section className={styles.PropertyCard__image}>
        <img key={photo} src={photo} alt={title} />
      </section>
      <section className={styles.PropertyCard__infoText}>
        {superHost && (
          <span className={styles.PropertyCard__infoText___superHost}>
            Super Host
          </span>
        )}
        <span className={styles.PropertyCard__infoText___detailLine}>
          <span
            className={styles.PropertyCard__infoText___detailLine____details}
          >
            {type} {beds && `· ${beds} ${beds > 1 ? 'beds' : 'bed'}`}
          </span>
          <span
            className={styles.PropertyCard__infoText___detailLine____rating}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {rating}
          </span>
        </span>
      </section>
      <h4 className={styles.PropertyCard__title}>{title}</h4>
    </article>
  );
};

export default PropertyCard;
