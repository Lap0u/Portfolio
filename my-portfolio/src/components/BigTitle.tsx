import clementProfile from '../assets/clement_profile.png';

const BigTitle = () => {
  return (
    <>
      <img
        src={clementProfile}
        alt="face"
        className="z-0 first-letter: absolute top-40 left-32 w-[clamp(10rem_,_10vw_,_20rem)] rounded-full"
      />
      <div
        id="home"
        className="flex flex-col items-center justify-center w-screen h-[100vh] radial2">
        <div className="text-[clamp(6rem_,_8vw_,_10rem)] font-bold text-white">
          CLEMENT BEAURAIN
        </div>
        <div className="text-[clamp(1rem_,_1.5vw_,_1.5rem)] text-white font-roboto">
          FULLSTACK <span className="text-teal">ㅇ</span> WEB{' '}
          <span className="text-teal">ㅇ</span> DEVELOPER
        </div>
      </div>
    </>
  );
};

export default BigTitle;
