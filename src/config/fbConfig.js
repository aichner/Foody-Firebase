// Firebase app
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBCnoxUp8Oprt4cISggMH3LN6A5FDlgnQs",
  authDomain: "foody-wca.firebaseapp.com",
  databaseURL: "https://foody-wca.firebaseio.com",
  projectId: "foody-wca",
  storageBucket: "",
  messagingSenderId: "1073523405159",
};

firebase.initializeApp(config);
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export default firebase;
