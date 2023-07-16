import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBreakpoints } from '../hooks/useBreakpoints';
import { Icon } from '@iconify/react/dist/iconify.js';

const NavBar = () => {
  const { isMobile } = useBreakpoints();
  const [isNavVisible, setNavVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const toggleNavBar = () => {
    setNavVisible(!isNavVisible);
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
        <div className="w-screen flex justify-between p-4 radial1 fixed items-center">
          <div className="hover:opacity-80 font-roboto text-2xl text-pastelTeal w-[10vw] font-bold self-start">
            Clément<span className="text-pastelBlue">__B.</span>
          </div>
          <div className="flex flex-col relative justify-right">
            <Icon
              onClick={toggleNavBar}
              icon="bxs:left-arrow"
              className={
                'text-white self-end' +
                (isNavVisible ? ' opacity-50 -rotate-90' : '')
              }
            />
            {isNavVisible && (
              <div className="flex flex-col gap-y-4">
                <Link
                  to="home"
                  className="font-roboto text-md text-white font-semibold text-right">
                  home
                </Link>
                <Link
                  to="competences"
                  className="font-roboto text-md text-white font-semibold text-right">
                  compétences
                </Link>
                <Link
                  to="projets"
                  className="font-roboto text-md text-white font-semibold text-right">
                  projets
                </Link>
                <Link
                  to="contact"
                  className="font-roboto text-md text-white font-semibold text-right">
                  contact
                </Link>
              </div>
            )}
          </div>
        </div>
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
