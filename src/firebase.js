import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFFaJhApJRh4KH5YSzONjrety_RX_Ubvo",
  authDomain: "gameshot-in-tokyo.firebaseapp.com",
  projectId: "gameshot-in-tokyo",
  storageBucket: "gameshot-in-tokyo.appspot.com",
  messagingSenderId: "68238271363",
  appId: "1:68238271363:web:c8d0031f5af6671b374cb6",
  measurementId: "G-2NMRVBPHGF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;