import fs from 'fs';
import getFilename from '../helpers/getFilename.js';

const write = async () => {
    const path = getFilename('./files/fileToWrite.txt', import.meta.url);
    process.stdin.on('data', (data) => {
    fs.createWriteStream(path).write(data);
    })
};

await write();