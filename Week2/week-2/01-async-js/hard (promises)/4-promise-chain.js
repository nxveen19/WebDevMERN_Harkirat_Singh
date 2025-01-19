/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("promise resolved 1")
        }, t)
    })
}

function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("promise resolved 2")
        }, t)
    })
}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("promise resolved 3")
        }, t)
    })
}

function calculateTime(t1, t2, t3) {
    let start = performance.now()
    async function execute(){
let promise1 = await wait1(t1);
console.log(promise1);
await wait2(t2);
await wait3(t3);
let end = performance.now();
// each function completes sequentially and you measure the total time accurately.
// Promise.all() Use Case: when tasks are ind of each other and dont need to wait for one task to finish
// async await : when task depends on each other await waits under certain task is finished
console.log(`Time Taken : ${end-start}`)
    };
    execute();
}

calculateTime(3000, 2000, 1000);
module.exports = calculateTime;
