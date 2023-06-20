import {createReadStream, createWriteStream} from 'fs'
import { createGzip, createUnzip } from 'zlib';
import getFilename from '../helpers/getFilename.js'
import { pipeline } from 'stream/promises';

const decompress = async () => {
    const gzip = createUnzip();
    const source = createReadStream(getFilename('./files/archive.gz', import.meta.url));
    const destination = createWriteStream(getFilename('./files/fileToCompress.txt', import.meta.url));

    pipeline(source, gzip, destination);
}

await decompress();