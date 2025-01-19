/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise(resolve => { // promise is async it executes last
        let start = Date.now()
        while((Date.now() - start) < milliseconds){ // while loop is sync
            //do nothing
        }
        resolve("promise resolved after busy wait")
    })
}

sleep(2000).then((message) => {
    console.log(message)
})
function add(a, b){
    console.log(a+b);
}

add(5, 3) // this fn is sync and it si outside sleep() so it gets executed immediately

// The while loop in your busyWait function blocks the JavaScript thread, 
// so it doesn’t allow the event loop to process other tasks.
// A promise alone doesn’t make the function non-blocking; 
// it’s the asynchronous task inside it (e.g., setTimeout) that allows the event loop to continue.
// To make the function work without blocking, use asynchronous mechanisms like setTimeout or async/await 
// instead of a synchronous while loop.

module.exports = sleep;
