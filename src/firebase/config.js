// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAV6hYbK2d2OJnmH7qy25zhKvXr2qImtCQ",
  authDomain: "picture-galery-fc141.firebaseapp.com",
  projectId: "picture-galery-fc141",
  storageBucket: "picture-galery-fc141.appspot.com",
  messagingSenderId: "1076128728954",
  appId: "1:1076128728954:web:8b7549b40897819f6a78c3",
  measurementId: "G-HD0FZ181SX",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const fireStore = firebase.firestore();

const date = firebase.firestore.FieldValue.serverTimestamp;

export { storage, fireStore, date };
