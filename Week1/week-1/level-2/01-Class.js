//creating class
class  Animal {
  constructor(name, legCount, speaks){  
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  //function
  speak(){
    console.log("hi there " + this.speaks);
  }
  static fn() {
    console.log("Who let the dogs Out")
  }
}

//creating Object 
let dog = new Animal("dog", 2, "bhow bhow")
console.log(dog.name)
//no need to create object for static, call using class
Animal.fn()

let currentDate = new Date
hour = currentDate.getHours()
console.log("hours are: ",hour );
console.log(`hours are: ${hour}`);
console.log(currentDate.getTime())
// JSON
const users = `{
  "name" : "naveen",
  "age" : 22,
  "company" : "deloitte"
}`
user = JSON.parse(users)
console.log(user) 

function square(n){
  return n*n
}
function cube(n){
  return n*n*n
}
function sumOfSquares(a,b){
  return square(a) + square(b)
}
console.log(sumOfSquares(4,5));
let cat = new Animal("billa", 4, "meow");
cat.speak()