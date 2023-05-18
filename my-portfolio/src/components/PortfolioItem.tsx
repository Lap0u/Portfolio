import React from 'react';

export type PortFolioProps = {
  img: string;
  title: string;
  description: string;
  link: string;
  stack: string[];
};

const PortfolioItem = ({
  img,
  title,
  description,
  link,
  stack,
}: PortFolioProps) => {
  return (
    <div>
      <h1>
        {img} {title} {description} {link} {stack}
      </h1>
    </div>
  );
};

export default PortfolioItem;
