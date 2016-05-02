/// <reference path='../typings/tsd.d.ts' />

import express = require('express');
var app = express();

app.use('/', express.static('../../../client/wwwroot/index.html'));
app.use('/', express.static('../../../client/wwwroot/'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

export = app;