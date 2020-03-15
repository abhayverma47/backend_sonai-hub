const functions = require("firebase-functions");

const app = require("express")();

const fbAuth = require("./util/fbAuth");

const {
  getAllPosts,
  postOnePost,
  getPost,
  commentOnPost,
  likePost,
  unlikePost,
  deletePost
} = require("./handlers/posts");
const {
  signup,
  login,
  imageUpload,
  addUserDetails,
  getAuthenticatedUser
} = require("./handlers/users");

// Posts routes
app.get("/posts", getAllPosts);
app.post("/new", fbAuth, postOnePost);
app.get("/post/:postId", getPost);
app.get("/post/:postId/like", fbAuth, likePost);
app.get("/post/:postId/unlike", fbAuth, unlikePost);
app.delete("/post/:postId", fbAuth, deletePost);
app.post("/post/:postId/comment", fbAuth, commentOnPost);

// users routes
app.post("/signin", signup);
app.post("/login", login);
app.post("/user/image", fbAuth, imageUpload);
app.post("/user", fbAuth, addUserDetails);
app.get("/user", fbAuth, getAuthenticatedUser);

exports.api = functions.region("asia-east2").https.onRequest(app);
