import fs from 'fs';

const list = async () => {
    const folderPath = getFilename('./files', import.meta.url);

    fs.stat(folderPath, (err) => {
        if(err) throw Error('FS operation failed')
    })

    fs.readdir(folderPath, (err, files) => {
        console.log(files);
    })
};

await list();