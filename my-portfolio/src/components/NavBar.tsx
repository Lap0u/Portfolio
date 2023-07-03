import { useState } from 'react';

const NavBar = () => {
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
    <div className="w-screen flex justify-center items-center z-1 top-0 radial1 pb-6 sticky">
      <div className="hover:opacity-80 font-roboto text-2xl text-pastelTeal w-[10vw] font-bold absolute top-10 left-10 z-10 debug">
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
    </div>
  );
};

export default NavBar;
