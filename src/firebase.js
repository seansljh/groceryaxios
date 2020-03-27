import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyA5k5-q9E63UdsEO_ZVAQ4fc7AgFMTR4YY",
    authDomain: "axios-test-1197b.firebaseapp.com",
    databaseURL: "https://axios-test-1197b.firebaseio.com",
    projectId: "axios-test-1197b"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;