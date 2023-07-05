import { Icon } from '@iconify/react';

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
  return (
    <div
      className={`flex flex-col items-center relative justify-start pt-4 w-1/3 h-full text-white shadow-md ${addedStyle}`}>
      <Icon
        icon={icon}
        style={{ color: underlineColor }}
        className="text-5xl absolute top-6 left-6"
      />
      <div className="flex flex-col text-3xl font-semibold items-center justify-center my-4">
        <div
          style={{
            background: `linear-gradient(180deg,rgba(255,255,255,0) 60%, ${underlineColor} 60%)`,
          }}>
          {underlined}
        </div>
        <div>{title}</div>
      </div>
      <p className="mx-10 mt-4 text-xl text-center">{text}</p>
    </div>
  );
};

export default CompetencesCard;
