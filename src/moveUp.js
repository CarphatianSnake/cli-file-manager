import { sep } from 'node:path';

export const moveUp = (location) => {
  const pathLength = location.split(sep).length;

  if (pathLength > 1) {
    return location.slice(0, location.lastIndexOf(sep));
  }

  return location;
};
