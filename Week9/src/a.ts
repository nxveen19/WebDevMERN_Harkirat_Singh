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
runAfter1S(function(){
    console.log("hello world");
    return 5; 
})