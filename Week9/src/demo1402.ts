type User1 = {
    firstName: string;
    lastName: string;
    age: number
}
// UNION
type GreetArg = number | string

function greet( id: GreetArg) {
    // id can be number or string 
    // can also be written as id : (string | number)
} 

// INTERSECTION can also be done using type
type Employee1 = {
    name: string;
    startDate: string;
}

interface Manager {
    name: string;
    department: string;
};
// IF I WANT to do OR ya fir AND it has be type
// Manager and employee can be interface doesnt matter
type TechLead = Employee1 | Manager // AND
//also 
type TechLead1 = Employee1 & Manager //OR

//Arrays : defining type in arrays
// you can do that arr:  number[] by adding []

type NumberArr = number[];

function maxValue(arr: NumberArr){
    // or arr: number[]
}

