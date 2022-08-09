const express = require("express");
const { createPost, getFeed } = require("../controllers/postController");

module.exports = () => {
  const router = express.Router();

  router.post("", createPost);
  router.get("", getFeed);

  return router;
};
