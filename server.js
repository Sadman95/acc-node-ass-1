const http = require("http");
const { PORT } = require("./config");
const connection = require("./db/connection");
const app = require("./app");
const httpServer = http.createServer(app);

const port = PORT;

(() => connection())();

httpServer.listen(port, () => {
  console.log("SERVER IS LISTENING AT PORT : ", port);
});
