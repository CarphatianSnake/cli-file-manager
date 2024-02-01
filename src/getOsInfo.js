import { EOL, homedir, userInfo, arch, cpus } from 'node:os';

export const getOsInfo = (input) => {
  switch(input.replace('os --', '')) {
    case('EOL'):
      console.log(EOL);
      break;
    case('homedir'):
      console.log(homedir());
      break;
    case('username'):
      console.log(userInfo().username);
      break;
    case('architecture'):
      console.log(arch());
      break;
    case('cpus'):
      const cores = cpus();
      console.log(`\nTotal amount of cores: ${cores.length}`);
      cores.forEach((core, index) => {
        console.log(`${index}: ${core.model.trimEnd()} @ ${core.speed / 1000} GHz`);
      });
      break;
    default:
      console.error('Invalid input');
      break;
  }
};
