const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Magic_MAN!09',
  database: 'books_db'
});

db.query('DELETE FROM favorite_books WHERE id =?', 2, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

db.query('SELECT * FROM favorite_books', (err, results) => {
  console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});