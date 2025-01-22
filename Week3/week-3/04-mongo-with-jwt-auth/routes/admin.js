const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const { Admin, User, Course } = require("../db");

// Admin Routes
router.post('/signup', async (req, res) => {
        const {username, password} = req.body
        //check if this user already exist
        Admin.create({
            username: username,
            password: password
        }).then(()=> {
        res.json({
            message: "Admin created successfully"
        })
    })
    .catch(()=> {
        res.json({
            message: "Admin creation has error"
        })
    })
});

router.post('/signin', async (req, res) => {
    const {username, password} = req.body;

    const isValidated = await User.find({
        username,
        password
    })
    if (isValidated){
    const token = jwt.sign({username}, JWT_SECRET); //create a jwt token
    res.json({
        token
    })
} else {
    res.status(411).json({
        msg: "Incorrect email or password" 
    })
}
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;