import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from 'firebase/app';



const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: ",
    messagingSenderId: "",
    appId: ""
  };

  // const app = initializeApp(firebaseConfig);

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{firebase, db, auth};
