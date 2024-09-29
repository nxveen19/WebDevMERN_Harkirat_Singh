//create an HTTP server
const express = require("express");
const app = express();
const port = 3000; 
const bodyParser = require("body-parser")
app.use(express.text ());
console.log(app.listen())
 
// app.use(bodyParser.text())
app.get('/', (req, res) => {
    res.send('<b>Hiii there!!</b>')
});
app.get('/post', (req, res) => {
    res.status(305).send("first post req")
    console.log(req.body)
});

app.listen(port, () => {
    console.log(`Example app listening in port ${port}`)
});
//coommitting to Week2


