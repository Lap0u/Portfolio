import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import ProjetsTitle from './ProjetsTitle';

const allProjects = [
  {
    id: '1',
    attributes: {
      title: 'Portfolio',
      description: 'My portfolio website',
      difficulty: '1',
      image: 'portfolio.png',
      link: 'link',
    },
  },
  {
    id: '2',
    attributes: {
      title: 'Portfolio',
      description: 'My portfolio website',
      difficulty: '1',
      image: 'portfolio.png',
      link: 'link',
    },
  },
  {
    id: '3',
    attributes: {
      title: 'Portfolio',
      description: 'My portfolio website',
      difficulty: '1',
      image: 'portfolio.png',
      link: 'link',
    },
  },
  {
    id: '4',
    attributes: {
      title: 'Portfolio',
      description: 'My portfolio website',
      difficulty: '1',
      image: 'portfolio.png',
      link: 'link',
    },
  },
  {
    id: '5',
    attributes: {
      title: 'Portfolio',
      description: 'My portfolio website',
      difficulty: '1',
      image: 'portfolio.png',
      link: 'link',
    },
  },
  {
    id: '6',
    attributes: {
      title: 'Portfolio',
      description: 'My portfolio website',
      difficulty: '1',
      image: 'portfolio.png',
      link: 'link',
    },
  },
];

const Projets = () => {
  const navigate = useNavigate();
  const navigateTo = (link: string) => {
    navigate(`projets/${link}`);
  };
  return (
    <div id="projets" className="w-full min-h-screen radial2 text-white">
      <ProjetsTitle />
      <div className="text-white flex flex-col m-16 gap-y-6 lg:gap-y-12">
        {allProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            handleClick={() => navigateTo(project.attributes.link)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projets;
