const {
    createUserService,
    followUserService,
    unfollowUserService,
  } = require("../../services/user/index");
  
  const createUser = async (req, res) => {
    try {
      const { name, email, password, gender } = req.body;
      const response = await createUserService(name, email, password, gender);
      const followSelf = await followUserService(email,email);
      res.status(201).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).end("Something went wrong");
    }
  };

  const followUser = async (req, res) => {
    try {
      const { user1_email, user2_email } = req.body;
      const response = await followUserService(user1_email, user2_email);
      res.status(201).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).end("Something went wrong");
    }
  };

  const unfollowUser = async (req, res) => {
    try {
      const { user1_email, user2_email } = req.body;
      const response = await unfollowUserService(user1_email, user2_email);
      res.status(201).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).end("Something went wrong");
    }
  };
  
  module.exports = {
    createUser,
    followUser,
    unfollowUser,
  };
  