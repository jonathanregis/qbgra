var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var salesRouter = require("./routes/sales");
const bodyParser = require("body-parser");

var app = express();

app.use(logger("dev"));
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  bodyParser.text({ type: "application/xml" })
);

app.use("/", indexRouter);
app.use("/sales", salesRouter);

module.exports = app;
