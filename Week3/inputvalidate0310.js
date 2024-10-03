//Input validation
const express= require("express")
const app = express();
app.use(express.json())
app.post("/kidney-checkup", function(req, res){
    //kidenys[1,2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    res.send("you have" + kidneyLength + "kidneys");
})
app.listen(3005);
//global catches(middleware)
// app.use(function(srr, req, res, next){
//     res.json
//     ({msg: "Sorry server is down"})
// })

//ZOD
const zod = require("zod")
const schema = zod.array(zod.number())
// {
//     email: string@email.com
//     password: atleast 8 Characters
//     country: "IN", "US"
// }
const schema1 = zod.object({
    email: zod.string().email(), // email validation
    password: zod.string().min(8), // min 8 char
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})
app.post("/health-checkup", function(req, res){
    //kidneys[1,2]
    // const kidneys = req.body.kidneys;
    //validation
    const response =  schema1.safeParse(req.body);
    if(!response.success){
        res.status(411).json({
            msg : "input is invalid"
        })
    } else {
    // const kidneyLength = kidneys.length;
    res.send({response});
    }
})
// Output
// {
//     "response": {
//         "success": true,
//         "data": [
//             1,
//             2
//         ]
//     }
// }
