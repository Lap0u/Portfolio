import NavBar from '../components/NavBar';
import BigTitle from '../components/BigTitle';
import Competences from '../components/Competences';
import Projets from '../components/Projets';
import { useBreakpoints } from '../hooks/useBreakpoints';

const Main = () => {
  const { isMobile } = useBreakpoints();
  console.log(isMobile);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cursor = document.querySelector('.cursor-dot') as HTMLDivElement;
    const cursorOutline = document.querySelector(
      '.cursor-outline'
    ) as HTMLDivElement;
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    cursorOutline.animate(
      {
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
      },
      { duration: 500, fill: 'forwards', easing: 'ease-in-out' }
    );
  };

  return (
    <div className="w-screen relative h-[200vh]" onMouseMove={handleMouseMove}>
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
      {/* <BackgroundImage /> */}
      <NavBar />
      <BigTitle />
      <Competences />
      <Projets />
    </div>
  );
};

export default Main;
