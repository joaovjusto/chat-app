var admin = require("firebase-admin");
var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyARlDIXWLym6IecCrRGUeVk-f5tfSyJBmI",
  authDomain: "chat-bot-8df2a.firebaseapp.com",
  databaseURL: "https://chat-bot-8df2a.firebaseio.com",
  projectId: "chat-bot-8df2a",
  storageBucket: "chat-bot-8df2a.appspot.com",
  messagingSenderId: "728015987052",
  appId: "1:728015987052:web:ea36bf17a8352330"
};

firebase.initializeApp(config);

const db = firebase.firestore();

module.exports = db;
