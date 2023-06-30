import cube from '../assets/oranment.png';

const BackgroundImage = () => {
  return (
    <img
      src={cube}
      alt="cube"
      className="w-[44rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
    />
  );
};

export default BackgroundImage;
