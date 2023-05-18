import React from 'react';
import PortfolioItem, { PortFolioProps } from './PortfolioItem';
import portfolio from '../data/portfolio.js';

const Portfolio = () => {
  return (
    <div>
      {portfolio.map((project: PortFolioProps) => (
        <PortfolioItem
          img={project.img}
          title={project.title}
          description={project.description}
          link={project.link}
          stack={project.stack}
        />
      ))}
    </div>
  );
};

export default Portfolio;
