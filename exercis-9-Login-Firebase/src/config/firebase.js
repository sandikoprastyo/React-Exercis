import firebase from "firebase/app";
import "firebase/auth";
//import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD9KiBWaLD5SGR1cWaUYpEEQFhlzToNuPU",
  authDomain: "login-2e630.firebaseapp.com",
  databaseURL: "https://login-2e630.firebaseio.com",
  projectId: "login-2e630",
  storageBucket: "login-2e630.appspot.com",
  messagingSenderId: "268570233560",
  appId: "1:268570233560:web:0fb103ece611f043bce5ad",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
