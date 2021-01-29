import firebase from "firebase";

require("@firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA2io6SBGxCk5mKzDX4vsVl3Fu2OdRGwh4",
  authDomain: "book-santa-app-6a734.firebaseapp.com",
  projectId: "book-santa-app-6a734",
  storageBucket: "book-santa-app-6a734.appspot.com",
  messagingSenderId: "193864109214",
  appId: "1:193864109214:web:d47378bfe96cc7a4963f8f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
