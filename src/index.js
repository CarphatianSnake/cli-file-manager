import { stdin as input, stdout as output } from 'node:process';
import { createInterface } from 'node:readline';
import { homedir } from 'node:os';
import { getUsername } from './getUsername.js';
import { moveUp } from './moveUp.js';
import { setPromptMessage } from './setPromptMessage.js';
import { getOsInfo } from './getOsInfo.js';

const fileManager = () => {
  let location = homedir();
  const username = getUsername();
  console.log(`Welcome to the File Manager, ${username}!`);

  const readline = createInterface({
    input,
    output,
    prompt: setPromptMessage(location),
  });

  readline.prompt();

  readline.on('line', (line) => {
    switch(true) {
      case(line === '.exit'):
        readline.close();
        break;
      case(line === 'up'):
        location = moveUp(location);
        readline.setPrompt(setPromptMessage(location));
        break;
      case(line.startsWith('os --')):
        getOsInfo(line);
        break;
      default:
        console.error('Invalid input');
        break;
    }

    readline.prompt();
  }).on('close', () => {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
  })
};

fileManager();
