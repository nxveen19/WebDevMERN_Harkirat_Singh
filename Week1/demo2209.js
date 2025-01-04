// starting today harkirat singh web dev course 01:02 pm 
//simple primitives
const prompt = require('prompt-sync')();
let title = prompt("Enter title: ");
console.log("hello world")   
function greet(first_name, last_name){

    if (title == "Mr."){
    console.log("Hellooo Sir" +" " + first_name + " " +last_name +" You are Welcome");
    }
    else {
        console.log("Hellooo Ma'am" +" " + first_name + " " +last_name +" You are Welcome");  
    }
}
greet("Naveen", "Pandey");

for (let i=0; i<10; i++){
    console.log(i)
}

//complex primitives (array)
//print even nos in an array
let myArray = [1,2,3,4,5,6,7,8]
let n = myArray.length
for(i=myArray[0]; i<myArray[n-1]; i++){
    if(i%2==0){
    console.log(i)
    }
}
//biggest number in an array
for(j=myArray[0]; j<myArray[n-1]; j++){
    if(j<j+1){
    biggestNumber = j+1
    }
    console.log(biggestNumber)
}
//reverses all elements of a string
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
    'name' : "NAveen",
    'surname' : "Pandey"
} 

users.name = "anas"
console.log(users)
