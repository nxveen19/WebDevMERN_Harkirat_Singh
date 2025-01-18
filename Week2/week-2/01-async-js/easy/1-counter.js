// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second


function counter(duration){
    let count = 0;

intervalId = setInterval(() => {
    count++;
    console.log(`count is ${count}`)
    if (count>duration){
        clearInterval(intervalId);
        console.log("Counter stopped")
    }
}, 1000)

}
// counter(5);

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function counter1(){
    let count = 0;
     function increment(){
        count++;
        console.log(`count is ${count}`);
        setTimeout(increment, 1000)
     }; 
     increment();
    };
// counter1()

