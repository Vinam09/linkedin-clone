import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from 'firebase/app';



const firebaseConfig = {
    apiKey: "AIzaSyBhQqTR0xRvsI7SsL50xfvtrWKbvyoLajs",
    authDomain: "linkedin-clone-8958e.firebaseapp.com",
    projectId: "linkedin-clone-8958e",
    storageBucket: "linkedin-clone-8958e.appspot.com",
    messagingSenderId: "874859088042",
    appId: "1:874859088042:web:4fea1d0a5127cc8497e8d3"
  };

  // const app = initializeApp(firebaseConfig);

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{firebase, db, auth};