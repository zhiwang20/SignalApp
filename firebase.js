// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import * as firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCilRm9bvnKOTn690RFeQl_fj55xr9okQw",
  authDomain: "signalapp-73a63.firebaseapp.com",
  projectId: "signalapp-73a63",
  storageBucket: "signalapp-73a63.appspot.com",
  messagingSenderId: "507688199032",
  appId: "1:507688199032:web:0ef4fc51f053a967eb5e8d",
};

// Initialize Firebase
let app;

//if the app has not initialized:
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
