import * as React from 'react';

type PageProps = {
  children: React.ReactNode;
};

const Page = ({ children }: PageProps) => (
  <article className="mb-16 text-gray-900 text-shadow-sm subpixel-antialiased">
    {children}
  </article>
);

export default Page;
