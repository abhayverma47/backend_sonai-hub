const admin = require("firebase-admin");

const serviceAccount = require("../../keys/admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sonai-5a393.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };
