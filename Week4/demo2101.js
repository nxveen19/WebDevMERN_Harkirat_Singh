// destructuring assigns OBJECTS AND ARRAYS to values
const array = [1,2,3]
const [firstValue, sencondValue] = array;
console.log(firstValue);

function greet({name, age}){
    return `name is : ${name} and age is : ${age}`
}

const user = {name: "naveen", age : 30, country: "india"}
console.log(greet(user)) // {name: "naveen" , age: 30} = argument {name , age}
const { Router } = require("express");
const router = Router()
console.log(typeof(Router))
//console.log(`${router} and ${Router}`)