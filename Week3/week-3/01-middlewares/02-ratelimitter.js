const express = require('express');
const app = express();
app.use(express.json());

// Object to track the number of requests per user (by user-id)
let numberOfRequestsForUser = {};

// Clears the requests count every second
setInterval(() => {
  console.log('Resetting request count for all users...');
  numberOfRequestsForUser = {};
}, 5000);

// Rate-limiting middleware
function limitRequest(req, res, next) {
  // Get the user ID from the header
  const userId = req.headers['userid'];  // Corrected header name to 'userid' to match Postman

  if (!userId) {
    return res.status(400).json({ msg: "user-id is required" });
  }

  // Initialize the request count for the user if not already initialized
  if (!numberOfRequestsForUser[userId]) {
    console.log(`Initializing request count for user-id: ${userId}`);
    numberOfRequestsForUser[userId] = 0;
  }

  // Check if the user has exceeded the limit of 5 requests per second
  if (numberOfRequestsForUser[userId] >= 5) {
    console.log(`User-id ${userId} has exceeded the rate limit. Blocking request.`);
    res.status(404).json({ msg: "Request limit exceeded" });
  }

  // Increment the request count for the user
  numberOfRequestsForUser[userId]++;
  console.log(`User-id ${userId} has made ${numberOfRequestsForUser[userId]} request(s)`);

  // Proceed to the next middleware or route handler
  next();
}

// Apply the rate-limiting middleware globally
app.use(limitRequest);

// Sample routes
app.get('/user', function(req, res) {
  console.log('Handling GET /user request');
  res.status(200).json({ name: "John" });
});

app.post('/user', function(req, res) {
  console.log('Handling POST /user request');
  res.status(200).json({ msg: 'created dummy user' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

module.exports = app;
