const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const {username, password} = req.body;
    User.create({
        username,
        password
    })
    res.json({
        msg: "user created successfully"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({
        //this shows all the courses and it has no middleware
        //normally db has a field is_published: true/false 
        // which decides if it is available to admin or general public 
    });
    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    //there is no purchase table so what we do this
    const courseId = req.params.courseId;
    const username = req.headers.username;
    User.updateOne({
        username: username},{
            "$push": {
                purchasedCourses: courseId
            }
        }).catch(function(e){
            console.log(e)
        })
    res.json({
        msg: "purchase complete"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({ // for this specific user, not all users
        username: req.headers.username
    });
    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses 
        }
    })
    res.json({
        courses : courses
    })
});

module.exports = router