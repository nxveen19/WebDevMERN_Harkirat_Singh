const { resolveObjectURL } = require('buffer');
const fs = require('fs');
const { resolve } = require('path');
const { resourceLimits } = require('worker_threads');
function naveen(cb){
// contents of the file is data, data is given to cb() function
fs.readFile('a.txt', "utf-8", function(err, data){ 
    cb(data)
});
}

function onDone(data){
    console.log(data)
}
//Promises
function pandey(){
    return new Promise(function(resolve){
        fs.readFile('a.txt', "utf-8", function(err, data){
        resolve(data);    
        })
    })
}
pandey().then(onDone) 

var d = new Promise(function(resolve){
    resolve("bas")
});
function callback(){
    console.log(d)
}
d.then(callback)

let p = new Promise(function(resolve){
    resolve("hii there");
});
console.log(p)
//wrong use of promise see copilot for mistakes
// function naveenReadFile (){
//     return new Promise(function(resolve){
//         setTimeout(resolve(){
//             console.log("hello baccho");
//         }, 2000);
//     });
// }
// naveenReadFile().then(resolve)
function anasReadFile(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hi there!")
        }, 3000);
    });
    return p;
}

anasReadFile().then(function(resolve){
    console.log(resolve)
});
//OOOOOOOOORRRRRRRRR insteas of this
async function main() {
    //no callbacks, no .then syntax
    let value = await anasReadFile()
    console.log(value);
}
main();
