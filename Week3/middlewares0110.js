const express = require("express");
const app = express();

app.get("/health-checkup", function(req, res){
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;
// Username checks
    if(username != "naveen" || password != "pass"){
        res.status(403).json({
            msg: "Users Doesnt exist"
        });
        return; // no further code is executed
    }
    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg: "Wrong inputs"
        });
        return; // no further code is executed
    }
    //
    res.send("Your kidney is fine")
});

//dumb way of doin auth checkups(upar ka code), repeat yourself for every new entry
let numberOfRequests = 0;
function calculateRequests(req, res, next){
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}
console.log(express.json());
//calculate requests - middlewares
app.get("/health-checkup2", calculateRequests, function(req, res){
res.send("counting no of reqs")
}) 
//when using express.json()
//parses the body of incoming requests and populates req.body with the parsed data with JSON as an input.
app.post("/health-checkup", function(req,res){
    console.log(req.body)
    res.json("Donee")
})
app.listen(3000);