const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin} = require("../db")
const router = Router(); // or router = express.Router()

// Admin Routes

// to does not handle /signup endpoint
// it handles /admin/signup
//in main index.js file in app.use("/admin") anything after /admin endpoint will be handled here 
router.post('/signup',adminMiddleware, (req, res) => {
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

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});
module.exports = router;