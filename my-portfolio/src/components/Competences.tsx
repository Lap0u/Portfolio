import CompetencesCard from './CompetencesCard';
import CompetencesTitle from './CompetencesTitle';
import code from '../assets/Code.png';
const colors = ['#DF058D', '#2C49D8', '#FBBF24'];

const Competences = () => {
  return (
    <div id="competences" className="radial1 w-screen h-[100vh] pt-12">
      <CompetencesTitle />
      <div className="flex mx-64 border-2 relative border-solid border-white mt-12 h-[40vh]">
        <CompetencesCard
          underlineColor={colors[0]}
          icon="uil:react"
          underlined="Frontend"
          title="React, Next.js, Tailwind, ..."
          text="Développement d'interfaces web et mobiles responsive et dynamiques. Utilisation de librairies et frameworks modernes. Mobile-first. Design UI/UX. Intégration de maquettes."
          addedStyle="border-r-2 border-solid border-white"
        />
        <CompetencesCard
          underlineColor={colors[1]}
          icon="fa6-brands:node"
          underlined="Backend"
          title="Nest.js, Express.js, Strapi, ..."
          text="Mise en place d'Apis REST. Développement d'architectures backend robustes et sécurisées. Utilisation de bases de données SQL au travers d'un ORM."
          addedStyle="border-r-2 border-solid border-white"
        />
        <CompetencesCard
          underlineColor={colors[2]}
          icon="carbon:machine-learning-model"
          underlined="Machine Learning"
          title="Python, Pandas, Matplotlib, ..."
          text="Implémentation de modèles de regression linéaire et classification.Analyse et visulation de la donnée. Manipulation de datasets."
        />
        <img
          src={code}
          alt="code"
          className="opacity-20 absolute w-[35vw] top-[70%] left-[50%] translate-x-[-50%]"
        />
      </div>
    </div>
  );
};

export default Competences;
