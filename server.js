var model = require('model');
var mysql      = require('mysql');
var express = require('express');
var app = express();
var Foo = function () {
  this.setAdapter('mysql', {
    "hostname": process.env.RDS_HOSTNAME,
    "port": process.env.RDS_PORT,
    "username": process.env.RDS_USERNAME,
    "password": process.env.RDS_PORT,
    "dbName":"rcasttest"
  });

  this.defineProperties({
    name: { type: 'string', required: true }
  });
};

Foo = model.register('Foo', Foo);

var myUser = Foo.create({name: 'aa'});

app.get('/', function(req, res){
  Foo.all({name: "aa"}, function(err, data) {
  res.send(data);
  });
});
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});