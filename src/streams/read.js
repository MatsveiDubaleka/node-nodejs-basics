import fs from 'fs';
import getFilename from '../helpers/getFilename.js'

const read = async () => {
    const path = getFilename('./files/fileToRead.txt', import.meta.url)
    fs.createReadStream(path).on('data', (chunk) => process.stdout.write(chunk))
};

await read();