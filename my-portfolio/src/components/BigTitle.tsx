import clementProfile from '../assets/clement_profile.png';
import { useOrientation } from '../hooks/useOrientation';

const BigTitle = () => {
  const { isPortrait } = useOrientation();
  return (
    <>
      {isPortrait ? (
        <div className="pt-48 flex flex-col items-center w-screen h-[100dvh] radial2">
          <img
            src={clementProfile}
            alt="face"
            className="z-0 w-[clamp(10rem_,_10vw_,_20rem)] rounded-full"
          />
          <div id="home" className="flex flex-col items-center justify-center">
            <div className=" text-center text-[clamp(4rem_,_8vw_,_12rem)] font-bold text-white">
              CLEMENT BEAURAIN
            </div>
            <div className="text-[clamp(1rem_,_1.5vw_,_1.5rem)] text-white font-roboto">
              FULLSTACK <span className="text-teal">ㅇ</span> WEB{' '}
              <span className="text-teal">ㅇ</span> DEVELOPER
            </div>
          </div>
        </div>
      ) : (
        <>
          <img
            src={clementProfile}
            alt="face"
            className="z-0 absolute tablet:top-[15vh] left-32 w-[clamp(10rem_,_10vw_,_20rem)] rounded-full"
          />
          <div
            id="home"
            className="flex flex-col items-center justify-center w-screen h-[100vh] radial2">
            <div className="text-center text-[clamp(6rem_,_8vw_,_10rem)] font-bold text-white">
              CLEMENT BEAURAIN
            </div>
            <div className="text-[clamp(1rem_,_1.5vw_,_1.5rem)] text-white font-roboto">
              FULLSTACK <span className="text-teal">ㅇ</span> WEB{' '}
              <span className="text-teal">ㅇ</span> DEVELOPER
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BigTitle;
