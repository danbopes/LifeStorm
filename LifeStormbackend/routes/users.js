var express = require('express');
var router = express.Router();
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "users"
})


router.post('/', function(req, res, next) {

  var email = req.body.email;
  var password = req.body.password;

  connection.query(
    "SELECT * FROM user WHERE email = ? AND password = ?"
    [email, password], function (err, row, field) {

      if (err) {
        console.log(err);
        res.json({ "success": false, "message": "Konnte nicht mit db verbinden"});
      }

      if (row.length > 0) {
        res.json({ "success": true, "user": row[0].username });
      } else {
        res.json({ "success": false, "message": "Der Benutzer wurde nicht gefunden"});
      }

    });

});

module.exports = router;
