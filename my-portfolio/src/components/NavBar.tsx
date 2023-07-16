import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBreakpoints } from '../hooks/useBreakpoints';

const NavBar = () => {
  const { isMobile } = useBreakpoints();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const elemClasses = `transition-opacity font-roboto text-lg text-white font-semibold hover:opacity-100 ${
    isHovered ? 'opacity-40' : 'opacity-100'
  }`;
  return (
    <>
      {isMobile ? (
        <div>mobile nav</div>
      ) : (
        <div className="w-screen flex justify-center items-center z-10 top-0 radial1 pb-6 fixed">
          <div className="hover:opacity-80 font-roboto text-2xl text-pastelTeal w-[10vw] font-bold absolute top-10 left-10">
            Clément<span className="text-pastelBlue">__B.</span>
          </div>
          <div className="flex justify-center items-center gap-x-10 mt-10">
            <Link
              to="home"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={elemClasses}>
              // home
            </Link>
            <Link
              to="competences"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={elemClasses}>
              // compétences
            </Link>
            <Link
              to="projets"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={elemClasses}>
              // projets
            </Link>
            <Link
              to="contact"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={elemClasses}>
              // contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
