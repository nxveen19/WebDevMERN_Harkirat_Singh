// /**
//   You need to create an express HTTP server in Node.js which will handle the logic of a file server.
//   - Use built in Node.js `fs` module
//   The expected API endpoints are defined below,
//   1. GET /files - Returns a list of files present in `./files/` directory
//     Response: 200 OK with an array of file names in JSON format.
//     Example: GET http://localhost:3000/files
//   2. GET /file/:filename - Returns content of given file by name
//      Description: Use the filename from the request path parameter to read the file from `./files/` directory
//      Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
//      Example: GET http://localhost:3000/file/example.txt
//     - For any other route not defined in the server return 404
//     Testing the server - run `npm run test-fileServer` command in terminal
//  */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(express.json());

app.get('/files', (req, res) => {
  fs.readdir(path.join(__dirname, './files/'), 'utf-8', (err, data) => {
    if (err){
      return res.sendStatus(500).json({error: "Failed to retrieve data"});
    }
    res.json(data)
  })
})

app.get("/files/:fileName", function (req, res){
  const name = req.params.fileName; // url should be req from params
  console.log(name);
  //This constructs the absolute path to the file by joining the directory name of the current module (__dirname) with the file name (name).
  const filePath = path.join(__dirname, './files' ,name); // Construct the file path by joining 'dirname' /week2/02-nodejs with ./files/ with name of file
  // it does not check whether file exist or not. if i put example.txt it will create a path with /files/example.txt
  console.log(filePath)
  console.log(__dirname)
  fs.readFile(filePath, "utf-8", function(err, data){
    res.json({
      data});
  })
});

app.all('*', (req,res) => {
  res.status(404).send('Route not found');
});

app.listen(3005);
module.exports = app;