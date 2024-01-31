import { argv } from 'node:process';

export const getUsername = () => {
  return argv.reduce((acc, arg) => {
    if (arg.startsWith('--username=')) {
      return arg.replace('--username=', '');
    }
    return acc;
  }, 'Anonymous');
};
