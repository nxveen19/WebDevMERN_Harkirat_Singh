function greet(firstName: string){
    console.log("hello" + firstName)
}

greet(" naveen");

//type inference
//ts infers a and b is number so sum is also number 
function isLegal(age: number){
    if (age> 18){
        return true;
    }else{
        return false;
    }
}
//islegal automatically inferred as boolean
isLegal(12)

//when parsing fn as an arg
function runAfter1S(fn: () => void){
    //void return type means its return value will be ignored
    setTimeout(fn, 1000);
}
const value = runAfter1S(function(){
    console.log("hello world");
    return 5; 
})

console.log("Value is:" + value)

//INTERFACES
// you can create types in user arg as user : {firstName : string and so on}
// instead user interfaces
interface User {
    firstName : string;
    lastName: string;
    age: number;
    email?: string // email is optional
}
function isLegal2(user: User){
    if (user.age > 18){
        return true;
    } else {
        return false;
    }
}
isLegal2({
    firstName : 'naveen',
    lastName: 'pandey',
    age: 22  
})

// Implementing interfaces
interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

//implementing as a class
class Employee implements Person {
    name: string;
    age: number;
    // above prop have to be initialized in a constructor
    constructor (n:string, a:number){
        this.name = n;
        this.age = a;
    }
    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

const e = new Employee("harkirat", 22);
console.log(e.name)

