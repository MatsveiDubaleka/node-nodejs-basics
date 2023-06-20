import fs from 'fs';
import getFilename from '../helpers/getFilename.js'

const read = async () => {
    const path = getFilename('./files/fileToRead.txt', import.meta.url);

    fs.readFile(path, 'utf-8',(err, data) => {
        if(err) throw Error('FS operation failed')

        console.log(data);
    })
};

await read();