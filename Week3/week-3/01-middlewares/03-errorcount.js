// const request = require('supertest');
// const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

function errorfn(){
  errorCount++;
  console.log(errorCount)
}

app.get('/user', function(req, res, next) {
  throw new Error("User not found");
  res.status(200).json({ name: 'john' });
  //next(err)
});

app.post('/user', function(req, res, next) {
  res.status(200).json({ msg: 'created dummy user' });
  //next(err)
});

app.get('/errorCount', function(req, res, next) {
  res.status(200).json({ errorCount });
  //next(err)
});

app.use((req, res, err, next)=> {
  errorCount++
  console.error(errorCount);
  res.sendStatus(err.status || 404).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  })
})
app.listen(3000);
module.exports = app;