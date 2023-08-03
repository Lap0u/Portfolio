import { useNavigate } from 'react-router-dom';
import ProjectCard, { IProject } from './ProjectCard';
import ProjetsTitle from './ProjetsTitle';

const allProjects: IProject[] = [
  {
    id: '1',
    attributes: {
      title: 'CV Parser',
      description: 'Une application web pour parser des CVs',
      image: 'portfolio.png',
      link: 'link',
      stack: ['frontend', 'backend'],
      skills: ['react', 'typescript', 'tailwindcss', 'docker'],
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
      skills: ['react', 'typescript', 'tailwindcss', 'docker'],
    },
  },
  {
    id: '3',
    attributes: {
      title: 'Lab Interface',
      description:
        'Une interface pour faciliter la communication entre les mentors et les laborantins',
      image: 'portfolio.png',
      link: 'link',
      stack: ['frontend', 'backend'],
      skills: [
        'nextjs',
        'typescript',
        'tailwindcss',
        'strapi',
        'postgresql',
        'docker',
      ],
    },
  },
  {
    id: '4',
    attributes: {
      title: 'Transcendance',
      description:
        'Jeu multijoueur en ligne avec fonctionnalités de chat et de matchmaking',
      image: 'portfolio.png',
      link: 'link',
      stack: ['frontend', 'backend'],
      skills: ['react', 'typescript', 'nestjs', 'postgresql', 'docker'],
    },
  },
  {
    id: '5',
    attributes: {
      title: 'Linear Regression',
      description:
        "Mise en placee d'une régression linéaire en python from scratch",
      image: 'portfolio.png',
      link: 'link',
      stack: ['machine-learning'],
      skills: ['python', 'pandas', 'numpy', 'plotly'],
    },
  },
  {
    id: '6',
    attributes: {
      title: 'DSLR',
      description:
        "Mise en place d'une régression logistique et analyse de données en python from scratch",
      image: 'portfolio.png',
      link: 'link',
      stack: ['machine-learning'],
      skills: ['python', 'pandas', 'numpy', 'plotly'],
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
