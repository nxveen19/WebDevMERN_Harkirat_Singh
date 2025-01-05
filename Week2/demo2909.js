const express = require('express')
const app = express();
app.use(express.json())
// console.log(typeof app)

// defining function of server

function sum(n){
    let ans = 0;
    for(let i=0; i<=n; i++){
        ans += i;
    }
    return ans;
}

var users = [{
    name: "naveen",
    kidneys: [{
        healthy: false,
        
    }]
}]
// query params(input type for get)
app.get('/', function(req, res){
    // const n = req.query.n;
    // const result = sumd(n)
    // res.send(result.toString());
    const naveenKidneys = users[0]["kidneys"]
    const noOfKidneys = naveenKidneys.length;
    let noOfHealthyKidneys = 0;
    for(let i=0; i<noOfKidneys; i++){
        if(naveenKidneys[i]["healthy"]) {
            noOfHealthyKidneys += 1;
        }
    }
    let noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;
    res.json({
        naveenKidneys,
        noOfKidneys,
        noOfHealthyKidneys,
        noOfUnhealthyKidneys
    })
});

//middlewares
app.post('/', function(req, res){
    console.log(req.body) //undefined it is notable to parse isHealthy
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: true
    })
    // which makes it {healthy: false},{healthy : true}
    res.json({
        msg: "Done!!"
    })
})

app.put("/", function(req,res){
    for (let i=0; i<users[0].kidneys.length; i++){
    users[0].kidneys[i].healthy =true;
    }
    //res.json otherwise req is hung
    res.json("Done!!");
})

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for (let i=0; i<users[0].kidneys.length; i++){
        if (!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
        }
    return atleastOneUnhealthyKidney
    }
//removing all unhealthy kidneys
app.delete("/", function(req,res){
    // if there are no unhealthy kidneys you should return a status code
    //FOR GOOD PRACTISE
    if (isThereAtleastOneUnhealthyKidney()){
    //only if there is atleast 1 unhealthy kidney
    let newKidneys = [];
    for (let i=0; i<users[0].kidneys.length; i++){
        if (users[0].kidneys[i].healthy == true){
            newKidneys.push({
                healthy: true
            })
        };
        }
        //res.json otherwise req is hung
        users[0].kidneys =newKidneys;
        res.json("Done!!");
    }else{
        res.status(411).json({ // or sendStatus() w/o json()
            msg: "You have no bad kidneys"
        })
    }
})
// address of the http server
app.listen(3001);