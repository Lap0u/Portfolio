import CompetencesCard from './CompetencesCard';
import CompetencesTitle from './CompetencesTitle';
import code from '../assets/Code.png';
import { useOrientation } from '../hooks/useOrientation';
const colors = ['#DF058D', '#2C49D8', '#FBBF24'];

const Competences = () => {
  const { isLandscape } = useOrientation();
  return (
    <div id="competences" className="radial1 w-screen min-h-screen py-12">
      <CompetencesTitle />
      <div className="flex flex-col tablet:flex-row justify-center mx-6 tablet:mx-36 w-auto border-2 border-white">
        <CompetencesCard
          underlineColor={colors[0]}
          icon="uil:react"
          underlined="Frontend"
          title="React, Next, Tailwind"
          text="Développement d'interfaces web et mobiles responsive et dynamiques. Utilisation de librairies et frameworks modernes. Mobile-first. Design UI/UX. Intégration de maquettes."
          addedStyle="border-b-2 tablet:border-r-2 border-solid border-white"
        />
        <CompetencesCard
          underlineColor={colors[1]}
          icon="fa6-brands:node"
          underlined="Backend"
          title="Nest, Express, Strapi, FastAPI"
          text="Mise en place d'Apis REST. Développement d'architectures backend robustes et sécurisées. Utilisation de bases de données SQL au travers d'un ORM."
          addedStyle="border-b-2 tablet:border-r-2 border-solid border-white"
        />
        <CompetencesCard
          underlineColor={colors[2]}
          icon="carbon:machine-learning-model"
          underlined="Machine Learning"
          title="Python, Pandas, Matplotlib"
          text="Implémentation de modèles de regression linéaire et regression logistique.Analyse et visulation de la donnée. Manipulation de datasets."
        />
        {isLandscape && (
          <img
            src={code}
            alt="code"
            className="opacity-20 absolute w-[45vw] top-[70%] left-[50%] translate-x-[-50%]"
          />
        )}
      </div>
    </div>
  );
};

export default Competences;
