// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let fs = require("fs");
const { promise } = require("zod");
function counter(duration){
    let count = 0;

intervalId = setInterval(() => {
    count++;
    console.log(`count is ${count}`)
    if (count>duration){
        clearInterval(intervalId);
        console.log("Counter stopped")
    }
}, 1000)

}
// counter(5);

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function counter1(){
    let count = 0;
function increment(){
        count++;
        console.log(`count is ${count}`);
        setTimeout(increment, 1000)
    }; 
    increment();
    };
// counter1()

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

function expensiveOperation() {
    let counter = 0;
    const startTime = Date.now();
    while (Date.now() - startTime < 7000) { // Simulate 5 seconds of work
        counter++;
    }
    console.log(`Expensive operation completed. Counter: ${counter}`);
}
// The readFile callback still runs after the expensive operation because it is asynchronous, 
// but since the operation is synchronous, it still blocks the event loop until it's done.
function navReadFile(){
    let p = new Promise((resolve) => {
        fs.appendFile("example.txt", "shuru krte hai bina kisi bkchodi ke", 'utf-8', (err) => { 
            // append adds the new data while writeFile replaces with the existing data
            console.log("data written successfully")
        });
        fs.readFile("example.txt", "utf-8", (err, data) => { // fs itself is async
            resolve(data)
        })

    })
    console.log("hii") // this wont ru n cause code after return wont execute
    p
    .then(data => {
        console.log(data)
    })
    expensiveOperation()
}
navReadFile()


