import { useState } from 'react';

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const elemClasses = `transition-opacity hover:cursor-pointer font-roboto text-lg text-white font-semibold hover:opacity-100 ${
    isHovered ? 'opacity-40' : 'opacity-100'
  }`;
  return (
    <>
      <nav className="w-full flex justify-center items-center">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="hover:opacity-90 hover:cursor-pointer font-roboto text-2xl items-self-start text-pastelTeal font-bold absolute top-10 left-10">
          Clément<span className="text-pastelBlue">__B.</span>
        </div>
        <div className="flex justify-center items-center gap-x-10 mt-10">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={elemClasses}>
            // home
          </div>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={elemClasses}>
            // compétences
          </div>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={elemClasses}>
            // projets
          </div>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={elemClasses}>
            // contact
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
