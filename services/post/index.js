const { getFeedForGivenUserIdFromDb, createPostInDb } = require("./db");

const getFeedService = async (userId) => {
  console.log("in the get Feed Service Function");
  const posts = await getFeedForGivenUserIdFromDb(userId);
  return posts;
};

const createPostService = async (userId, title, text) => {
  console.log("in the create post Service Function");
  const post = await createPostInDb(userId, title, text);
  return post;
};

module.exports = { getFeedService, createPostService };
