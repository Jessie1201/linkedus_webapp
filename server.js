const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

const SELECT_ALL_USERINFO_QUERY = 'SELECT * FROM user_info';

const connection = mysql.createConnection({
  host: '18.188.104.144',
  user: 'linkedus',
  password: '12345678',
  database: 'linkedus'
});

connection.connect(err => {
  if (err) throw err;
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/userinfo', (req, res) => {
  connection.query(SELECT_ALL_USERINFO_QUERY, (err, results) => {
    if(err) return res.send(err);
    return res.json({
        data: results
    })
  })
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));