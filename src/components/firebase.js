import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAWfWWLGTs0rOsoRMOb5ck8eIfIEGscx5c",
  authDomain: "simple-e-commerce-87878.firebaseapp.com",
  projectId: "simple-e-commerce-87878",
  storageBucket: "simple-e-commerce-87878.appspot.com",
  messagingSenderId: "954538523251",
  appId: "1:954538523251:web:901d5fedb81d86ccf1c806"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth}