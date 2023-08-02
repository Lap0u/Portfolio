import { useBreakpoints } from '../hooks/useBreakpoints';
import code from '../assets/Code.png';
import { Icon } from '@iconify/react';

export type IProject = {
  id: string;
  attributes: {
    title: string;
    description: string;
    image: string;
    link: string;
    stack: Array<'frontend' | 'backend' | 'machine-learning'>;
    skills: string[];
  };
};

type ProjectCardProps = {
  project: IProject;
  handleClick: () => void;
};

const ProjectCard = ({ project, handleClick }: ProjectCardProps) => {
  const Icons = {
    frontend: ['uil:react', 'text-5xl text-[#DF058D]'],
    backend: ['fa6-brands:node', 'text-5xl text-[#2C49D8]'],
    'machine-learning': [
      'carbon:machine-learning-model',
      'text-5xl text-[#FBBF24]',
    ],
  };
  const { isMobile } = useBreakpoints();
  return (
    <>
      {isMobile ? (
        <div
          onClick={handleClick}
          className="hover:cursor-pointer flex flex-col justify-center items-center gap-y-3 w-full">
          <div className="my-4 flex justify-center gap-x-4 items-center">
            <div className="font-semibold text-[clamp(1.5rem_,_2vw_,_2rem)] text-white">
              {project.attributes.title}
            </div>
          </div>
          <div className="flex justify-center gap-x-6">
            {project.attributes.stack.map((stack) => (
              <Icon
                className={Icons[stack][1]}
                key={stack}
                icon={Icons[stack][0]}
              />
            ))}
          </div>
          <img
            className="rounded-2xl"
            src={code}
            alt={project.attributes.title}
            width={'80%'}
          />
          <div>{project.attributes.description}</div>
        </div>
      ) : (
        <div
          onClick={handleClick}
          className="hover:cursor-pointer hover:bg-opacity-10 hover:btn-gradient justify-between flex mt-5 ml-5 gap-x-5">
          <div className="basis-1/4 w-[400px] max-w-[400px] h-[250px] max-h-[250px] relative">
            <img
              className="rounded-2xl hover:scale-110 duration-200 overflow-hidden object-cover"
              src={code}
              alt={project.attributes.title}
            />
          </div>
          <div className="flex flex-col justify-start mx-6 pr-64 gap-y-3 basis-3/4">
            <div className="my-1 flex items-center gap-x-10">
              <div className="font-medium text-white text-[clamp(3rem_,_4vw_,_4rem)]">
                {project.attributes.title} hello
              </div>
            </div>
            <div className="text-[clamp(1rem_,_1.5vw_,_1.5rem)]">
              {project.attributes.description}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
