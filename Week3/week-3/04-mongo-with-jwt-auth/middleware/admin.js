const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    // console.log(req.headers)
try {    const token = req.headers.authorization //same as Authourization
    // get token form "bearer jksbjcbdcekasdasawdawas"
    const words = token.split(" ");
    const jwtToken = words[1]
    const decodes_value = jwt.verify(jwtToken, JWT_SECRET)
    
    if (decodes_value.username) {
        next();
    } else {
        res.status(403).json({
            msg: "You are not authenticated"
        })
    }
    }catch(e){
        res.json({
            msg: "Incorrect Inputs"
        })
    }
}
module.exports = adminMiddleware;