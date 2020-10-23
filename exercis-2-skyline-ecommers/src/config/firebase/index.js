import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCdC5prJr18VXIK3UKb9eDllQQ_Q50qL0",
  authDomain: "simple-note-firebase-a1b04.firebaseapp.com",
  databaseURL: "https://simple-note-firebase-a1b04.firebaseio.com",
  projectId: "simple-note-firebase-a1b04",
  storageBucket: "simple-note-firebase-a1b04.appspot.com",
  messagingSenderId: "213664297502",
  appId: "1:213664297502:web:3ad4939f0802752b3ef40f",
  measurementId: "G-PQ7R2FPVZJ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Get a reference to the database service
export const database = firebase.database();
export default firebase;
