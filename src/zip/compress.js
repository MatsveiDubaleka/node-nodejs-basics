import {createReadStream, createWriteStream} from 'fs'
import { createGzip } from 'zlib';
import getFilename from '../helpers/getFilename.js'
import { pipeline } from 'stream/promises';

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(getFilename('./files/fileToCompress.txt', import.meta.url));
    const destination = createWriteStream(getFilename('./files/archive.gz', import.meta.url));

    pipeline(source, gzip, destination);   
};

await compress();