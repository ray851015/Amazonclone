import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB79e4WvIrngtjvceQu2jbiFs2rX8CQWE",
  authDomain: "clone-f8ed9.firebaseapp.com",
  projectId: "clone-f8ed9",
  storageBucket: "clone-f8ed9.appspot.com",
  messagingSenderId: "218931366366",
  appId: "1:218931366366:web:dac60116ba6fbd502ab54f",
  measurementId: "G-0WPHSHX2Q6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};