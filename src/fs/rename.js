import fs from 'fs';

const rename = async () => {
    const oldName = 'wrongFilename.txt';
    const newName = 'properFilename.md';

    const oldFilePath = getFilename(`./files/${oldName}`, import.meta.url);
    const newFilePath = getFilename(`./files/${newName}`, import.meta.url);

    fs.readFile(oldFilePath, (err, data) => {
        if(err) throw Error('FS operation failed');
    })

    fs.readFile(newFilePath, (err, data) => {
        if(data) throw Error('FS operation failed');
    })

    fs.rename(oldFilePath, newFilePath, (err) => {
        if(err) throw Error('FS operation failed');
        console.log('File was successfully renamed!')
    })
};

await rename();