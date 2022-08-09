const config = require("../../config/index");
const db = config.getDb();

const getFeedForGivenUserIdFromDb = (userId) => {
  // const listOfFollowing = db("application.posts").select("*").where("user_id", "=", userId);
  return db("application.posts").select("*").whereIn("user_id", function() {
    this.select("user_id2").from("application.followers").where("user_id1", "=", userId);
  });    
};

const createPostInDb = (userId, title, text) => {
  return db("application.posts")
    .insert({
      user_id: userId,
      title: title,
      text: text,
    })
    .returning("*");
};

module.exports = { getFeedForGivenUserIdFromDb, createPostInDb };
