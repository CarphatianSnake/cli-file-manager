import { stdin as input, stdout as output } from 'node:process';
import readline from 'node:readline';
import { getUsername } from './getUsername.js';

const fileManager = () => {
  const username = getUsername();
  console.log(`Welcome to the File Manager, ${username}!`);

  const rl = readline.createInterface({
    input,
    output,
    prompt: 'Enter your command:\n',
  });

  rl.prompt();

  rl.on('line', (line) => {
    if (line === '.exit') {
      rl.close();
      process.exit(0);
    }
    rl.prompt();
  }).on('close', () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  })
};

fileManager();
