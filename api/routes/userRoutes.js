const express = require("express");
const { createUser, followUser, unfollowUser } = require("../controllers/userController");

module.exports = () => {
  const router = express.Router();

  router.post("", createUser);
  router.post("/follow", followUser);
  router.delete("/unfollow", unfollowUser);

  return router;
};
