import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEc3Xo-3I7lhogqYTrBu161JF90DurMuQ",
  authDomain: "facebook-me-7ce43.firebaseapp.com",
  projectId: "facebook-me-7ce43",
  storageBucket: "facebook-me-7ce43.appspot.com",
  messagingSenderId: "767795341431",
  appId: "1:767795341431:web:f44c0804e60996ce5a3e72"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const google = new firebase.auth.GoogleAuthProvider();

export { db, auth, google };