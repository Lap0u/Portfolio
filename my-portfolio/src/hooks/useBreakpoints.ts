import { TAILWIND_BREAKPOINTS } from '../shared/utils/common';
import { useEffect, useState } from 'react';

export interface IBreakpoint {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
}

export const useBreakpoints = (): IBreakpoint => {
  const [width, setWidth] = useState(375);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
    };
  }, []);

  return {
    isMobile: !!(width && width < TAILWIND_BREAKPOINTS.TABLET),
    isTablet: !!(
      width &&
      width >= TAILWIND_BREAKPOINTS.TABLET &&
      width < TAILWIND_BREAKPOINTS.LAPTOP
    ),
    isLaptop: !!(
      width &&
      width >= TAILWIND_BREAKPOINTS.LAPTOP &&
      width < TAILWIND_BREAKPOINTS.DESKTOP
    ),
    isDesktop: !!(width && width >= TAILWIND_BREAKPOINTS.DESKTOP),
  };
};
