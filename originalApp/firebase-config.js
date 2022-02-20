// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWLRnJJV6DQ2nJFoZoRffkRp4x05_ApRU",
  authDomain: "mobileappbootcamp.firebaseapp.com",
  projectId: "mobileappbootcamp",
  storageBucket: "mobileappbootcamp.appspot.com",
  messagingSenderId: "220134976792",
  appId: "1:220134976792:web:a924ec88c10bc2947dc26d",
  measurementId: "G-C1KFHT37BF",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const fireStore = firebase.firestore();
const auth = firebase.auth();
// const background = firebase.functions();

export { fireStore, auth };
