import { Icon } from '@iconify/react';
import { useOrientation } from '../hooks/useOrientation';

type CompetencesCardProps = {
  underlineColor: string;
  icon: string;
  underlined: string;
  title: string;
  text: string;
  addedStyle?: string;
};

const CompetencesCard = ({
  underlineColor,
  icon,
  underlined,
  title,
  text,
  addedStyle,
}: CompetencesCardProps) => {
  const { isLandscape } = useOrientation();
  return (
    <div
      className={`basis-1/3 py-4 flex flex-col justify-center items-center text-white tablet:relative ${addedStyle}`}>
      <div className="flex flex-col text-3xl font-semibold items-center justify-center my-4">
        <Icon
          icon={icon}
          style={{ color: underlineColor }}
          className="text-5xl"
        />
        <div
          style={{
            background: `text-center linear-gradient(180deg,rgba(255,255,255,0) 60%, ${underlineColor} 60%)`,
          }}>
          {underlined}
        </div>
        <div className="text-center">{title}</div>
      </div>
      <p className="mx-10 mt-4 text-xl text-center">{text}</p>
    </div>
  );
};

export default CompetencesCard;
