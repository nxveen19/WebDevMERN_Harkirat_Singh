"use strict";
function greet(firstName) {
    console.log("hello" + firstName);
}
greet(" naveen");
//type inference
//ts infers a and b is number so sum is also number 
function sum(a, b) {
    return "gg";
    //return a+b;
}
const value = sum(1, 2);
console.log(value);
