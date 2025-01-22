const { Router, json } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, Course} = require("../db")
const router = Router(); // or router = express.Router()

// Admin Routes

// to does not handle /signup endpoint
// it handles /admin/signup
//in main index.js file in app.use("/admin") anything after /admin endpoint will be handled here 
router.post('/signup', (req, res) => {
    // Implement admin signup logic
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

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
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
    // Implement fetching all courses logic
    const allCourses = await Course.find({
    })
    res.json({courses: allCourses});
});
module.exports = router;