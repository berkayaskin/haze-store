import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDvR-hrDnt_eOlQX3Ogclbxmiwxo4Caa0o",
    authDomain: "haze-store.firebaseapp.com",
    projectId: "haze-store",
    storageBucket: "haze-store.appspot.com",
    messagingSenderId: "741495449663",
    appId: "1:741495449663:web:601d3bc1cdbf6f3d00308a",
    measurementId: "G-06M4F3PLQQ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;