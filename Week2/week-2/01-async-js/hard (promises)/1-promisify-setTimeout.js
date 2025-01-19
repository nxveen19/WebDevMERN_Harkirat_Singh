/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function demo_wait(n) {
    setTimeout(() => {
        p =  new Promise((resolve) => {
            resolve("promise resolved");
        })
        p.then((message) => {
            console.log(message)
        })
    }, n)
}
demo_wait(2000)

// Issues in Your Code:
// Promise Inside setTimeout:

// You're creating a promise inside setTimeout, but this isn't necessary. The setTimeout should be part of the promise logic itself.
// The promise should encapsulate the delayed resolution, not be created after the delay.
// Incorrect Handling of then:

// You are immediately calling console.log("promise resolved") instead of passing the console.log function as a reference to .then(). This causes console.log to execute right away, rather than waiting for the promise to resolve.
// p is Not Returned:

// The function does not return the promise, so the caller cannot use .then() or await to handle the resolution.

function wait(n){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("promise resolved correctly")
        }, n)
    })
}

wait(4000).then((message) => { // resolved value is passed as an arg to .then()
    console.log(message)
})
module.exports = wait;
