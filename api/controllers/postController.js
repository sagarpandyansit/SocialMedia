const {
    createPostService,
    getFeedService,
  } = require("../../services/post/index");
  
  const createPost = async (req, res) => {
    try {
      const { userId, title, text } = req.body;
      const response = await createPostService(userId, title, text);
      res.status(201).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).end("Something went wrong");
    }
  };

  const getFeed = async (req, res) => {
    try {
      const { userId } = req.body;
      const response = await getFeedService(userId);
      res.status(201).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).end("Something went wrong");
    }
  }
  
  module.exports = {
    createPost,
    getFeed,
  };
  