const express = require('express');
const mysql = require('mysql2');
const readline = require('readline');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Magic_MAN!09',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
);

////////////////////////////////////////////////////////////////////////////////////////////////

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});