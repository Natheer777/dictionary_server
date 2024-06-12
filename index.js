const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql2');
const router = require('./Routers/Route');
const app = express();
const port = process.env.PORT || 3010;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/adduser', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'input_form.html'));
});

app.get('/edite', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'edite.html'));
});
app.get('/delete', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'delete.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});