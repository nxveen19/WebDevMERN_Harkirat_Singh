function userMiddleware(req, res, next) {
    const token = req.headers.authorization //same as Authourization
    // get token from "bearer jksbjcbdcekasdasawdawas"
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
}

module.exports = userMiddleware;