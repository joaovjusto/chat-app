var admin = require("firebase-admin");
  var firebase = require("firebase");

  var config = {
    apiKey: "AIzaSyA_IjeL62W4anQ5N17utTAPXaIzJCg2PNI",
    authDomain: "payment-1df53.firebaseapp.com",
    databaseURL: "https://payment-1df53.firebaseio.com",
    projectId: "payment-1df53",
    storageBucket: "payment-1df53.appspot.com",
    messagingSenderId: "42730853007"
  };

  firebase.initializeApp(config);

  const db = firebase.firestore()
  
  module.exports = db;