export type PropertyItem = {
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number;
  photo: string;
};

export type PropertyList = PropertyItem[];

export type PropertyCard = Pick<
  PropertyItem,
  'superHost' | 'type' | 'beds' | 'rating' | 'title' | 'photo'
>;
