import fs from 'fs';

const remove = async () => {
    const path = getFilename('./files/fileToRemove.txt', import.meta.url);
    fs.readFile(path, (err, data) => {
        if(err) throw Error('FS operation failed')
    })

    fs.unlink(path, (err) => {
        if(err) throw Error('FS operation failed')
        console.log('File was successfully removed!')
    })
};

await remove();