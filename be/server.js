const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Open the SQLite database
const db = new sqlite3.Database('./database.db');

// Define a route to fetch data
app.get('/data', (req, res) => {
  const query = 'SELECT * FROM your_table_name'; // Replace 'your_table_name' with your actual table name

  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
