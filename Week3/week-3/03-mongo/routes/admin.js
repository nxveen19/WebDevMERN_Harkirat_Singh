const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router(); // or router = express.Router()

// Admin Routes

// to does not handle /signup endpoint
// it handles /admin/signup
//in main index.js file in app.use("/admin") anything after /admin endpoint will be handled here 
router.post('/signup', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});
module.exports = router;