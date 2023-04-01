// app.js
const express = require('express');
const app = express();
const path = require('path');
const shadesRoutes = require('./src/routes/shadesRoutes');

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Set up static assets
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', shadesRoutes);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
