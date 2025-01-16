const mongoose = require("mongoose");
//connected with db user_app *NOT* with collection 
mongoose.connect("mongodb+srv://naveen123:72769602@cluster0.ykxfp.mongodb.net/user_app") 
const User = mongoose.model('users', {
    name : String,   // this is the schema
    password: String
});
const user = new User({ name: 'Naveen pandey', 
    email: 'naveen@gmail.com', password: '112233'}); // created new user
user.save() //put data into database
// kitty.save().then( () => console.log('meow'));

// Step 2: Running this via http methods