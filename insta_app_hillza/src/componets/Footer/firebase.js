import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyCBayqHKL8mVZUkImMr4VtjXDSh0w8aIFE",
    authDomain: "ig-clone-f10b2.firebaseapp.com",
    databaseURL: "https://ig-clone-f10b2.firebaseio.com",
    projectId: "ig-clone-f10b2",
    storageBucket: "ig-clone-f10b2.appspot.com",
    messagingSenderId: "29207021531",
    appId: "1:29207021531:web:1e03f66ce6438946d149fe",
    measurementId: "G-M1PXGW6VD5"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  export default db;