const fs = require('fs');
// const co = require('co');
const readFile = function(fileName){
    return new Promise(function(resolve, reject){
        fs.readFile(fileName, function(error, data){
            if(error) return reject(error);

            resolve(data);
        });
    });
}

// const gen = function async(){
//     const f1 = yield readFile('async.js');
//     console.log("run here \n");
//     const f2 = yield readFile('async.js');

//     console.log("f1"+f1.toString());
//     console.log("f2"+f2.toString());    
// }

// co(gen);

// console.log(gen());

// for(let v of gen())
// {
//     console.log(v);
// }

const asyncReadFile = async function ()
{
    const f1 = await readFile('async.js');
    console.log("run here \n");//there will print in head
    const f2 = await readFile('async.js');
    if(f1.toString() !='')
    {
        console.log("f1 read finish\n");
        console.log("f1"+f1.toString());
    }

    if(f2.toString() !='')
    {
        console.log("f2 read finish\n");        
        console.log("f2"+f2.toString());
    }
}

asyncReadFile();