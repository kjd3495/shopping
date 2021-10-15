import firebase from 'firebase';
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyB4fSdTws2d41eq5oM7xEy6kyI2OxoX-S0",
    authDomain: "fir-b2f8f.firebaseapp.com",
    projectId: "fir-b2f8f",
    storageBucket: "fir-b2f8f.appspot.com",
    messagingSenderId: "507921690444",
    appId: "1:507921690444:web:2f7fd9566e233ec45629e9",
    measurementId: "G-QQT58G1S2H"
  };

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth(); 

export {firestore, auth};
  