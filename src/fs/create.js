import fs from 'fs'
import getFilename from '../helpers/getFilename.js';

const create = async () => {
    const folderPath = getFilename('./files/fresh.txt', import.meta.url);

    fs.readFile(folderPath, (err, data) => {
        if(!err && data) {
            throw Error('FS operation failed')
        }
        fs.writeFile(folderPath, 'I am fresh and young', () => {
            console.log('File was created')
        })
    })
};

await create();