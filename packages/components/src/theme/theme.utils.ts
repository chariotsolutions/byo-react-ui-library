/**
 * We know that the size is going to be 16 at 100%
 * and then the browser is going to take over.
 */
export const makeRem = (size: number) => `${size / 16}rem`;
