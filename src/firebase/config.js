import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZxe7AMC2ki6Zj7ZHTuEKIB7GEvIHdKlk",
  authDomain: "vue-firebase-sites-36b5a.firebaseapp.com",
  projectId: "vue-firebase-sites-36b5a",
  storageBucket: "vue-firebase-sites-36b5a.appspot.com",
  messagingSenderId: "133477645271",
  appId: "1:133477645271:web:c2657197afbeff4a67e992",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const firestore = firebase.firestore();

// making a reference of timestamp(special firestore data type)
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firestore, timestamp };
