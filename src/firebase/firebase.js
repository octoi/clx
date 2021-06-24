import firebase from "firebase";
import firebaseConfig from './firebaseConfig'; // create one with firebase config

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore()
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider(); // to sign up with google

export { auth, firestore, storage, provider }