
const parseEnv = () => {
    const arr = Object.entries(process.env);
    arr.forEach((elem) => {
        if(elem[0].startsWith('RSS_')) console.log(elem[1]);
    })
};

parseEnv();