

const express = require('express');
const app = express();
const PORT = 3000;

const msg = process.env.APP_MESSAGE || 'YZN IS ACTIVE';
console.log(`Message from container: ${msg}`);
console.log(`NODE_ENV is set to: ${process.env.NODE_ENV || 'not defined'}`);
console.log('Connected to MYSQL');

// A simple route
app.get('/', (req, res) => {
  res.send(msg);
});

// Health check route
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`App listening on port ${PORT}`);
});