import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBmEkyQETyMHpyrAJbXT-uV-3kZRVM49Yk",
  authDomain: "catch-of-the-day-sbarry50.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-sbarry50.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
