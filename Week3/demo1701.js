const express = require("express"); 
const app = express();
app.use(express.json())
const mongoose = require("mongoose");
//connected with db user_app, *NOT* with collection 
mongoose.connect("") 
const User = mongoose.model('users', {
    name : String,   // this is the schema
    password: String
});

app.post("/signup", async (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name; 
    // there is also user.update, user.delete which happens in mongodb, user is an obj here
    const existingUser = await User.findOne({ email: username});
    if (existingUser) {
        return res.status(400).send("Username already exists");
    }
    const user = new User({ name: name, 
        email: username, password: password
    }); // created new user
    user.save() //put data into database
    res.json({
        "msg": "User created successfully"
    })
    // kitty.save().then( () => console.log('meow')); 
});

// Step 2: Running this via http methods
