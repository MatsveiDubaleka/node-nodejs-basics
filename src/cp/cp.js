import { fork } from 'child_process';
import getFilename from '../helpers/getFilename.js'

const spawnChildProcess = async (args) => {
  const path = getFilename('./files/script.js', import.meta.url);
  fork(path, args);
};

await spawnChildProcess([1, 2, 3]);