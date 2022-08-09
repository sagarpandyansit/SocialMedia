const config = require("../../config/index");
const db = config.getDb();

const getUsersFromDb = () => {
  return db("application.users").select("*");
};

const getUserbyEmail = (email) => {
  return db("application.users").select("id").where("email", "=", email);
};

const createUserInDb = (name, email, password, gender) => {
  return db("application.users")
    .insert({
      name: name,
      email: email,
      password: password,
      gender: gender,
    })
    .returning("*");
};

const getEntryByIds = (userId1, userId2) => {
  return db("application.followers").select("*").where("user_id1", "=", userId1).where("user_id2", "=", userId2);
};

const followUserInDb = (userId1, userId2) => {
  return db("application.followers")
    .insert ({
      user_id1: userId1,
      user_id2: userId2,
    })
    .returning("*");
};

const unfollowUserInDb = (userId1, userId2) => {
  return db("application.followers")
    .delete("*").where("user_id1", "=", userId1).where("user_id2", "=", userId2);
};

module.exports = { getUsersFromDb, getUserbyEmail, createUserInDb, getEntryByIds, followUserInDb, unfollowUserInDb };
