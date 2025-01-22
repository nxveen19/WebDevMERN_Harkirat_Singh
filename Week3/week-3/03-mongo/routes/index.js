const express = require("express");
const bodyParser = require('body-parser');
const app = express();
// these two are similar to middlewares 
// cause router in admin.js returns a middleware
const adminRouter = require("./admin")
const userRouter = require("./user")

app.use(bodyParser.json());
app.use("/admin", adminRouter) // sets the base url as /admin for all urls in adminRouter
app.use("/user", userRouter)

//without using router
//I can write 
// app.get("/admin/signup", ()=> {})

app.listen(3000);
