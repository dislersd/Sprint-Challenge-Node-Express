// express
const express = require("express");
const server = express();
// routes
const actionRouter = require("./Routers/actionRouter.js");
const projectRouter = require("./Routers/projectRouter.js");

server.use(express.json());
server.use("/actions", actionRouter);
server.use("/projects", projectRouter);

server.get("/", async (req, res) => {
  try {
    res.status(200).send("Hello World");
  } catch (error) {
    res.status(500).json({ message: "error loading page" });
  }
});

module.exports = server;
