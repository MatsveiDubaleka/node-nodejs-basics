import * as url from 'url';

const getFilename = (path, metaURL) => url.fileURLToPath(new URL(path, metaURL));

export default getFilename;