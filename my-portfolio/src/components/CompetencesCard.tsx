const CompetencesCard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-1/3 h-1/3 mx-2 my-2 bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center justify-center w-1/2 h-1/2 my-2">
        Mon talent
      </div>
      <div className="flex flex-col items-center justify-center w-1/2 h-1/2 my-2">
        <p className="text-2xl font-bold text-center">React</p>
      </div>
    </div>
  );
};

export default CompetencesCard;
