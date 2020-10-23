import firebase from "firebase/app";
//import "firebase/auth";
//import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDMEx2H-VkMrCjYjjY9rWzBcXs3O5fIgiA",
  authDomain: "signin-b4f9e.firebaseapp.com",
  databaseURL: "https://signin-b4f9e.firebaseio.com",
  projectId: "signin-b4f9e",
  storageBucket: "signin-b4f9e.appspot.com",
  messagingSenderId: "810466778485",
  appId: "1:810466778485:web:a4a50648a0022840ae473c",
  measurementId: "G-7JXBE84522",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
