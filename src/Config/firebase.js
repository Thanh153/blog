import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
const firebaseConfig = {
  apiKey: "AIzaSyAX-A7LQgFEkYGJiQ1-566-siHW2-4IQQc",
  authDomain: "my-blog-70de5.firebaseapp.com",
  projectId: "my-blog-70de5",
  storageBucket: "my-blog-70de5.appspot.com",
  messagingSenderId: "381355321022",
  appId: "1:381355321022:web:6fef1ef1b9c817204020ef",
  measurementId: "G-XGFN421LCC"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;