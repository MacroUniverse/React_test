const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 5515;

// Open the SQLite database
const db = new sqlite3.Database('../data/database.db');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../fe/build')));

// API route to fetch data
app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM mytable';

  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Catch-all handler to return the React app for any request that doesn't match an API route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
