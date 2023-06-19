const parseArgs = () => {
    const args = process.argv;
    for (let index = 0; index < args.length; index++) {
        if(index < 1) continue;
        if(index % 2 == 0) {
            console.log(args[index].slice(2) + ' is ' + args[index+1])
        }
    }
};

parseArgs();