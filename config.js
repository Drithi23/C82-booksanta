import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCBWgni3eeIzD0GtY57lS669q9Iid9EGJ8",
  authDomain: "book-santa-568cc.firebaseapp.com",
  databaseURL: "https://book-santa-568cc.firebaseio.com",
  projectId: "book-santa-568cc",
  storageBucket: "book-santa-568cc.appspot.com",
  messagingSenderId: "1058138844344",
  appId: "1:1058138844344:web:45f7c554518c3de7e9d84d"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
