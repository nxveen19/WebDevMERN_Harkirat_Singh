let myArray = [1,2,3,4,5,6,7,8]
let n = myArray.length
for(j=myArray[0]; j<myArray[n-1]; j++){
    if(j<j+1){
    biggestNumber = j+1
    }
}
console.log(biggestNumber)

function reverseArray(array){
    let start = 0;
    let end = array.length - 1;
    while(start<end){
    let temp = array[start];
    array[start]  = array[end];
    array[end] = temp;
    start += 1;
    end -=1;
    }
    return array;
}
console.log(reverseArray(myArray));


const users = {
    name : "NAveen",
    surname : "Pandey"
}

users.name = "anas"

console.log(users.name)
// callback function
function sum(num1, num2, fnToCall) {
    let result = num1 +num2;
    fnToCall(result);
}
function displayResult(data){
    console.log("Result of sum is : " + data);
}
function displayResultPassive(data){
    console.log("Sum's result is : " + data);
}
// console.log(displayResult(sum(1, 2)));
console.log(sum(1, 2, displayResult))
//callback function ex. 2 
function calculateArithmetic(a, b, operation){
    operation(a,b);
    console.log(result);
}

function sum(a,b){
    result = a+b;
}
function sub(a, b){
    result = a-b;
}
calculateArithmetic(10,4,sub)