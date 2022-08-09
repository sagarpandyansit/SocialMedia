const { getUsersFromDb, createUserInDb, getUserbyEmail, getEntryByIds, followUserInDb, unfollowUserInDb } = require("./db");

const getUsersService = async () => {
  console.log("in the get users Service Function");
  const users = await getUsersFromDb();
  return users;
};

const createUserService = async (name, email, password, gender) => {
  console.log("in the create User Service Function");

  const existingUser = await getUserbyEmail(email);
  console.log(existingUser);
  if (existingUser.length > 0) {
    throw new Error("user already exists");
  }
  const newUser = await createUserInDb(name, email, password, gender);
  return newUser;
};

const followUserService = async (user1_email, user2_email) => {
  console.log ("in the follow user service function");
  const userId1 = getUserbyEmail(user1_email);
  const userId2 = getUserbyEmail(user2_email);
  const existingEntry = await getEntryByIds (userId1, userId2);
  console.log (existingEntry);
  if (existingEntry.length > 0) {
    throw new Error(userId1 + " already follows " + userId2);
  }
  const followUser = await followUserInDb (userId1, userId2);
  return followUser;
};

const unfollowUserService = async (user1_email, user2_email) => {
  console.log ("in the unfollow user service function");
  const userId1 = getUserbyEmail(user1_email);
  const userId2 = getUserbyEmail(user2_email);
  const existingEntry = await getEntryByIds (userId1, userId2);
  console.log (existingEntry);
  if (existingEntry.length == 0) {
    throw new Error(userId1 + " don't follow " + userId2);
  }
  const unfollowUser = await unfollowUserInDb (userId1, userId2);
  return unfollowUser;
};

module.exports = { getUsersService, createUserService, followUserService, unfollowUserService };
