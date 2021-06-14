import firebase from 'firebase'
require ('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyBG05u1FZQ2E0O4zvlUYuSeZ_vml06AAKA",
    authDomain: "calenderapp-edd01.firebaseapp.com",
    projectId: "calenderapp-edd01",
    storageBucket: "calenderapp-edd01.appspot.com",
    messagingSenderId: "832709437733",
    appId: "1:832709437733:web:081b2cd1a6c94cf6bb52cc"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()