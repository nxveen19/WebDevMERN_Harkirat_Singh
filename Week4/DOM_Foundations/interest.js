const express = require("express")
const app = express();
app.use(express.json());

app.get("/interest", (req,res) =>{
    const {principal, rate, time} = req.query;
    interest = (parseInt(principal)*parseInt(rate)*parseInt(time))/100
    res.json({
        total: parseInt(parseInt(principal)+parseInt(interest)),
        interest
    })
})

app.get("/sum", (req,res) =>{
    const {a, b} = req.query;
    res.send(parseInt(a)+parseInt(b))
})

app.listen(3000);