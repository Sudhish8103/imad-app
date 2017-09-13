var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');
var config = {
    user: 'whyblue123',
    database: 'whyblue123',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    paswword: process.env.DB_PASSWORD
};


var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool = new Pool();
app.get('/test-db', function (req, res){
   // make a select request
   // return a response with the results
   pool.query('SELECT * FROM test', function (err, result) {
        if (err) {
            res.status(500).send(err.toString());
        } else {
            res.send(JSON.stringify(result));
     }
   });
});

var counter = 0;
app.get('/counter', function(req, res){
   counter = counter + 1;
   res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function (req,res){// /submit-name?name=xxxx
    var name = req.query.name;
    names.push(name);
    res.send(counter.toString());
});

app.get('/:articleName', function(req,res) { 
    // articleNmae == article-one
    // articles[articleName] == { } content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
    
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
