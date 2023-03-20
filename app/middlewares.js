const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");

const middlewares = [
  cors(),
  morgan("dev"),
  express.json(),
  express.urlencoded(
    { extended: true },
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true })
  ),
];

module.exports = middlewares;
