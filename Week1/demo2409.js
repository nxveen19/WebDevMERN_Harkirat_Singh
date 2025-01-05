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

// Step 1: pandey() is called, which triggers the Promise.
// Step 2: Inside the Promise, fs.readFile() starts reading the file 'a.txt' asynchronously.
// Step 3: While fs.readFile() is working, the program continues executing other tasks (non-blocking behavior).
// Step 4: Once the file is successfully read, the resolve(data) function is called with the file's content.
// Step 5: The Promise is now fulfilled, and .then(onDone) runs. where value of resolve() is taken as an arguemnt in then() i.e. in Ondone here
// Step 6: The onDone function logs the content of the file (data) to the console.

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
    resolve("bas bhaii")
});
// resolved value i.e. bas bhaii is passed as an argument to callback(). while d is logged as a promise object Promise { 'bas' } its resolved value is logged as 'bas bhaii'
function callback(value){
    console.log(value)
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

// here function anasReadFile(uske andar new Promise class(Promise class me executor fn which takes resolve, reject as arg(uske andar setTimeout fn(setTimeout fn me executor fn(uske andar resolve function which reolve 'hi there' and stores in p)))))
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
// it would be same as if i wrote function callback(value){ console.log(value) } and call callback inside .then()
//OOOOOOOOORRRRRRRRR instead of this
async function main() {
    //no callbacks, no .then syntax
    let value = await anasReadFile() // resolved value stored in value
    console.log(value);
}
main();