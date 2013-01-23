var sys = require('sys');
var express = require('express');

express()
  .use(express.vhost('localone', require('./localone/app').app))
  .use(express.vhost('localtwo', require('./localtwo/app').app))
  .listen(8000);
