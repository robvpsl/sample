const cors = require('cors');
const PORT = 4200;
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const app = express();
const server = require('http').Server(app);

// MIDDLEWARE
app.use(
  cors({
    origin: [
      'http://localhost',
    ]
  })
);
app.use(helmet()); // TODO: Add Content Security Policy

// Serve up Angular app
app.use(express.static(path.join(__dirname, 'dist/frontend')));

// Serve up static assets
app.use(express.static(path.join(__dirname, 'src/assets')));

// Send to home page
app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/frontend/index.html'));
});

// Starting http server
server.listen(PORT, err => {
  if (err) {
    process.exit(1);
  }
  console.log(`Client is running on ${PORT}`);
});