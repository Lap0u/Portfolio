import { useNavigate } from 'react-router-dom';
import ProjectCard, { IProject } from './ProjectCard';
import ProjetsTitle from './ProjetsTitle';

const allProjects: IProject[] = [
  {
    id: '1',
    attributes: {
      title: 'Portfolio',
      description: 'My portfolio website',
      image: 'portfolio.png',
      link: 'link',
      stack: ['frontend'],
      skills: ['React', 'TypeScript', 'TailwindCSS'],
    },
  },
  {
    id: '2',
    attributes: {
      title: 'Portfolio',
      description: 'My portfolio website',
      image: 'portfolio.png',
      link: 'link',
      stack: ['frontend'],
      skills: ['React', 'TypeScript', 'TailwindCSS'],
    },
  },
  {
    id: '3',
    attributes: {
      title: 'Portfolio',
      description: 'My portfolio website',
      image: 'portfolio.png',
      link: 'link',
      stack: ['frontend', 'backend'],
      skills: ['React', 'TypeScript', 'TailwindCSS'],
    },
  },
  {
    id: '4',
    attributes: {
      title: 'Portfolio',
      description: 'My portfolio website',
      image: 'portfolio.png',
      link: 'link',
      stack: ['backend', 'machine-learning'],
      skills: ['React', 'TypeScript', 'TailwindCSS'],
    },
  },
  {
    id: '5',
    attributes: {
      title: 'Portfolio',
      description: 'My portfolio website',
      image: 'portfolio.png',
      link: 'link',
      stack: ['frontend'],
      skills: ['React', 'TypeScript', 'TailwindCSS'],
    },
  },
  {
    id: '6',
    attributes: {
      title: 'Portfolio',
      description: 'My portfolio website',
      image: 'portfolio.png',
      link: 'link',
      stack: ['frontend'],
      skills: ['React', 'TypeScript', 'TailwindCSS'],
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
      <div className="text-white flex flex-col my-16 gap-y-6 lg:gap-y-12">
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
