import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBtOT9wSWQhE1RfEmNfomvximsfpQyXVRo",
    authDomain: "copitienda-db.firebaseapp.com",
    databaseURL: "https://copitienda-db.firebaseio.com",
    projectId: "copitienda-db",
    storageBucket: "copitienda-db.appspot.com",
    messagingSenderId: "955182870947",
    appId: "1:955182870947:web:5d769b1af62cd13ae92a16"
  }
  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;