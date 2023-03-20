const express = require("express");
const app = express();
const middlewares = require("./middlewares");
const { notFoundHandler, errorHandler } = require("../middlewares/error");
const { healthCheckRoute } = require("./routes");
const tourRouter = require("../routes/tour-routes");

app.use(middlewares);

app.get("/", (_req, res) => {
	res.send(`<h4>Hello World!</h4>`);
});

app.use("/health", healthCheckRoute);

app.use("/tours", tourRouter);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
