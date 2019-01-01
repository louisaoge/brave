"use strict";

var _interopRequireDefault = require("/Users/yoke/Documents/Training/MEVN/brave/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _routes = require("./routes");

var _env = require("./config/env");

var _db = require("./config/db");

var app = (0, _express.default)();
var port = 3000;
(0, _env.setEnvironment)(app);
(0, _db.connectToDB)();
(0, _routes.registerRoutes)(app);
app.get('/', function (req, res) {
  if (process.env.NODE_ENV !== 'production') {
    return res.send('Running server in development mode.');
  } else {
    return res.sendFile('index.html', {
      root: __dirname + '/../dist/'
    });
  }
});
app.listen(port, function () {
  console.log("BRAVE app listening on port ".concat(port, " and in ") + process.env.NODE_ENV + ' mode!');
});