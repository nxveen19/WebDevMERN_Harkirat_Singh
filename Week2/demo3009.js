//maps, filter, arrow fns 
//arrow fns
function sum(a,b){
    return a+b;
}
//arrow fucntion
sum = (a,b) => {
    return a+b;
}
// application.get("/", (req,res)=>{

// })
function mul(i) {
    return i*2;
}
//given an array,give me back a new array where every value is mulp by 2
//using map function
let myArray = [1,2,3,4,5]
const ans = myArray.map(mul);
console.log(ans)
//filtering
//given an array, give me back all even values form i
filterLogic = (n) => {
    if(n%2==0){
        return true;
    } else {
        return false;
    }
}

const ans1 = myArray.filter(filterLogic);
// n => indic=visual values of the array
// OR const ans1 = myArray.filter(function (n){
//     if(n%2==0){
// helper function if (n.startsWith('h')) to find words starting with h
//         return true;
//     } else {
//         return false;
//     }
// }
// );
console.log(ans1 );