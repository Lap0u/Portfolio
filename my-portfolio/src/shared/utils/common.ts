import tailwindConfig from '../../../tailwind.config.js';

/**
 * @param input For instance `768px`.
 */
const parseTailwindBreakpointConfig = (input: string): number =>
  Number(input.slice(0, -2));

export const TAILWIND_BREAKPOINTS = {
  TABLET: parseTailwindBreakpointConfig(tailwindConfig.theme.screens.tablet),
  LAPTOP: parseTailwindBreakpointConfig(tailwindConfig.theme.screens.laptop),
  DESKTOP: parseTailwindBreakpointConfig(tailwindConfig.theme.screens.desktop),
};
