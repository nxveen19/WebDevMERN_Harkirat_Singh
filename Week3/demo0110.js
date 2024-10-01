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
app.listen(3000);
//dumb way of doin auth checkups(upar ka code), repeat yourself for every new entry
