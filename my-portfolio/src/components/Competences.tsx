import CompetencesCard from './CompetencesCard';
import CompetencesTitle from './CompetencesTitle';

const Competences = () => {
  return (
    <div className="radial1 w-screen h-[100vh] pt-12">
      <CompetencesTitle />
      <div className="flex mx-20 gap-x-10 mt-12">
        <CompetencesCard />
        <CompetencesCard />
        <CompetencesCard />
      </div>
    </div>
  );
};

export default Competences;
