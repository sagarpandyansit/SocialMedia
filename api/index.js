const express = require("express");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");

const initializeRoutes = (app) => {
  app.get("/status", (req, res) => {
    res.status(200).end("ok");
  });
  app.use(express.json());

  app.use("/users", userRouter());
  app.use("/posts", postRouter());
};

module.exports = { initializeRoutes };
