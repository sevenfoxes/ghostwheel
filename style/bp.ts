export const bp = {
  min: (size: string) => `@media(min-width: ${size}px)`,
  max: (size: string) => `@media(max-width: ${size}px)`,
  xs: 700,
  sm: 900,
  md: 1400,
  lg: 1800,
};
