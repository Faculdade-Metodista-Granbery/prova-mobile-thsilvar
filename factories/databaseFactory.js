import firebase from "firebase/app";
import "firebase/firebase-database";

const firebaseConfig = {
  apiKey: "AIzaSyDBLGOWFkn56yPROk2D1nj42vn-Eqr_hZQ",
  authDomain: "list-aef34.firebaseapp.com",
  databaseURL: "https://list-aef34-default-rtdb.firebaseio.com",
  projectId: "list-aef34",
  storageBucket: "list-aef34.appspot.com",
  messagingSenderId: "95618522896",
  appId: "1:95618522896:web:93e5315119c43061384f95",
  measurementId: "G-TMPWYBQHLS",
};

firebase.initializeApp(firebaseConfig);

const createFirebase = () => {
  const db = firebase.database().ref();
  return db;
};

const createDatabaseService = (service) => {
  if (service === "firebase") {
    return createFirebase();
  }
};

export default {
  createDatabaseService,
};
