var express = require("express");
var consign = require("consign");
var bodyParser = require("body-parser");
var cors = require("cors");

module.exports = function() {
  var app = express();

  var whitelist = ["http://localhost:8080"];
  var corsOptions = {
    origin: function(origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }
  };
  app.use(cors());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  consign()
    .include("db")
    .then("services")
    .then("controllers")
    .into(app);

  return app;
};
