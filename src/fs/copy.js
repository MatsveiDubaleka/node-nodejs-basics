import fs from 'fs';
import getFilename from '../helpers/getFilename.js'

const copy = async () => {
    const folderPath = getFilename('./files', import.meta.url);
    const copyPath = getFilename('./files_copy', import.meta.url);

    fs.stat(folderPath, (err, data) => {
        if(err) throw Error('FS operation failed');
    })

    fs.stat(copyPath, (err, data) => {
        if(data) throw Error('FS operation failed');

        fs.cp(folderPath, copyPath, {recursive: true}, (err) => {
            if(!err) console.log('Successfully was coppied');
        });
    })
    
};

await copy();
