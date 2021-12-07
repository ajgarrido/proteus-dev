import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/database");


const firebaseConfig = {
  apiKey: "AIzaSyB2i3kHA3VpOjjm6zaXszS1zPkmYYMDtT8",
  authDomain: "belcorp-84013.firebaseapp.com",
  databaseURL: "https://belcorp-84013.firebaseio.com",
  projectId: "belcorp-84013",
  storageBucket: "belcorp-84013.appspot.com",
  messagingSenderId: "447861435317",
  appId: "1:447861435317:web:b893f7d18cd864ad7c07fc"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();
const firestore = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {firebase, db, firestore, auth, storage}