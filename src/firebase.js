import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYEbVVKwuuVnLNhBl6HvWMJ5Rk7UaU4QI",
  authDomain: "facebook-clone-3a014.firebaseapp.com",
  projectId: "facebook-clone-3a014",
  storageBucket: "facebook-clone-3a014.appspot.com",
  messagingSenderId: "822023231912",
  appId: "1:822023231912:web:593992c04b4598fa9fa59d",
  measurementId: "G-13N6ZVV325",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
