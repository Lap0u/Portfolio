import { useEffect, useState } from 'react';

export interface IOrientation {
  isPortrait: boolean;
  isLandscape: boolean;
}

export const useOrientation = (): IOrientation => {
  const [height, setHeight] = useState(window.innerHeight || 667);
  const [width, setWidth] = useState(window.innerWidth || 375);

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
      });
    };
  }, []);

  return {
    isPortrait: !!(height && width && height > width),
    isLandscape: !!(height && width && height < width),
  };
};
