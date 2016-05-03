/// <reference path='../typings/tsd.d.ts' />

import express = require('express');
var app = express();

app.use('/js', express.static(__dirname + "/../../client/wwwroot/js"));
app.use('/css', express.static(__dirname + "/../../client/wwwroot/css"));
app.use('*', express.static(__dirname + "/../../client/wwwroot"));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

export = app;