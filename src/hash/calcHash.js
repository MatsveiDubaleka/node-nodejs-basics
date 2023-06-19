import { createHash } from 'crypto';
import getFilename from '../helpers/getFilename.js';
import fs from 'fs';

const calculateHash = async () => {
    const path = getFilename('./files/fileToCalculateHashFor.txt', import.meta.url);
    fs.readFile(path, (err, data) => {
        const hash = createHash('sha256').update(data).digest('hex')
        fs.writeFile(path, hash, (err) => {
            if(err) console.log(err);
        });
    })
};

await calculateHash();