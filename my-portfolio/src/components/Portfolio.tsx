import PortfolioItem, { PortFolioProps } from './PortfolioItem';
import { projects } from '../data/projects.ts';

const Portfolio = () => {
  return (
    <div>
      {projects.map((project: PortFolioProps) => (
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
