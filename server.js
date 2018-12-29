const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const connection = mysql.createConnection({
  host: '18.188.104.144',
  user: 'linkedus',
  password: '12345678',
  database: 'linkedus'
});

connection.connect(err => {
  if (err) throw err;
});


// axios.get('/home')
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });
  app.use(bodyParser.urlencoded())
  app.use(bodyParser.json())

  app.post('/profile', function(req, res) {
    //console.log('posted to /profile');
    //console.log(req.body);
    //console.log(req.method);
    var addsql = 'INSERT IGNORE INTO user_info (name, photo, title, location, summary, saveActive) VALUES(?,?,?,?,?,0)';
    var sqlparams = [req.body.Name, req.body.pictureURL, req.body.headline, req.body.location, req.body.summary];
    connection.query(addsql,sqlparams,function(err,result){
      if(err){
        console.log('[INSERT ERROR] -', err.message);
        return;
      }
      console.log('------INSERT--------');
      console.log(result);
      //console.log('--------------------\n\n');
    });
  });


//var addsql = 'INSERT IGNORE INTO user_info (name, photo, title, location, summary, saveActive) VALUES(?,?,?,?,?,0)';
//var sqlparams = [name, profile.pictureURL, profile.headline, profile.location, profile.summary];



/*connection.query(addsql,sqlparams,function(err,result){
  if(err){
    console.log('[INSERT ERROR] -', err.message);
    return;
  }
  console.log('------INSERT--------');
  console.log('result');
  console.log('--------------------\n\n');
});
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/userinfo', (req, res) => {
  connection.query('SELECT * FROM user_info;', (err, results) => {
    if(err) return res.send(err);
    return res.json({
        data: results
    })
  })
});

app.get('/api/usersaved', (req, res) => {
  connection.query('SELECT * FROM user_info WHERE saveActive = 1;',(err, results) => {
    if(err) return res.send(err);
    return res.json({
        data: results
    })
  })
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
