const axios = require("axios")

function main(){
    fetch("https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=perl&site=stackoverflow")
    .then(response => response.json())
    .then(data => console.log(data.items.length))    
}
main();

async function axiosfn(){
    const response = await axios.put(
        "https://httpdump.app/dumps/070a4140-c2d4-42b9-a6e4-785ef65ed13d", {
            name: "naveen",
            password: "1233212"
        },{
            headers: {
                Authorization: "Bearer 123"
            }
        }
    ); // can also send post,put, delete
    // it will auto understand incoming data is json and parse it 
    // and get access to it in response.data
    console.log(response.data)
}
axiosfn();