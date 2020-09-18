const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
var mysql = require('mysql');
const { query } = require('express');
const { connect } = require('http2');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, (req, res) => {
  console.log('The server started on poort 3000!');
});

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sha_password',
});

app.get('/api', (req, res) => {
  res.json({
    test: 'hello',
  });
});

passwordPost = async (req, res) => {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    const PostPassword = Object.values(req.body);
    const sha1 = crypto
      .createHash('sha1')
      .update(`${PostPassword}`)
      .digest('hex');

    var sql = `SELECT password FROM shapassword WHERE password='${sha1}'`;
    console.log(sha1);
    connection.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length == 0) {
        res.send('Your password is safe to use.');
      } else {
        const password = Object.values(result[0])[1];
        res.send(`Sorry your password is not safe to use.`);
      }
      connection.release();
    });
    console.log(`get req made and value is ${PostPassword}`);
  });
};

app.post('/api', passwordPost);
