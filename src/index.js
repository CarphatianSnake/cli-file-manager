import { stdin as input, stdout as output } from 'node:process';
import { createInterface } from 'node:readline';
import { homedir } from 'node:os';
import { getUsername } from './getUsername.js';

const fileManager = () => {
  let location = homedir();
  const username = getUsername();
  console.log(`Welcome to the File Manager, ${username}!`);

  const readline = createInterface({
    input,
    output,
    prompt: `\nYou are currently in ${location}\n`,
  });

  readline.prompt();

  readline.on('line', (line) => {
    if (line === '.exit') {
      readline.close();
    }
    readline.prompt();
  }).on('close', () => {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
  })
};

fileManager();
