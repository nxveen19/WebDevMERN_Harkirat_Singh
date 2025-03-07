//The given code is authenticated for a username and password

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "naveenpandey"; // secret key used to verify tokens sign

const app = express();
app.use(express.json())

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari"
  },
  {
    username: "naveen@gmail.com",
    password: "112233",
    name: "Naveen Pandey"
  }
];

function userExists(username, password) {
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
      return true; 
    }
  }
  return false;
}



app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  // const password = req.body.password
  try {
    const decoded = jwt.verify(token, jwtPassword);
    console.log(decoded)
    const username = decoded.username;
    res.json({
      users: ALL_USERS.filter(function(value){ // to filter out your own username
        if (value.username == username) {
          return false;
        } else {
          return true;
        }
      })
    })
    // return a list of users other than this username
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)