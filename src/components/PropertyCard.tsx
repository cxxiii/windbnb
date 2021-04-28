import { PropertyCard as PropCardTypes } from '../../types';
import * as React from 'react';

const PropertyCard = ({
  title,
  type,
  photo,
  rating,
  superHost,
  beds,
}: PropCardTypes) => {
  return (
    <article className="pb-4 shadow-lg rounded-b-2xl flex flex-col place-content-around">
      <section>
        <img
          className="object-cover h-56 w-full rounded-t-2xl"
          key={photo}
          src={photo}
          alt={title}
        />
      </section>
        <section className="flex justify-between p-4">
          {superHost && (
            <span className="whitespace-nowrap mr-2 p-2 border rounded-2xl">
              Super Host
            </span>
          )}
          <span className="w-full flex justify-between flex-wrap items-center">
            <span className="font-medium text-gray-500">
              {type} · {beds} beds
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-green-600 h-5 w-5 mr-1 inline-block"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {rating}
            </span>
          </span>
        </section>
        <h4 className="pl-4 font-semibold">{title}</h4>
    </article>
  );
};

export default PropertyCard;
