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

router.post('/courses', adminMiddleware, async (req, res) => {
    const {title, description, imageLink, price} =  req.body;
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    console.log(typeof(newCourse)) //Course ek obj hai to newCourse b ek obj hoga
    res.json({
        message: "Course created successfully", 
        courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const allCourses = await Course.find({
    })
    res.json({courses: allCourses});
});

module.exports = router;