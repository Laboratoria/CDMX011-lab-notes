import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCFX0Flvk19Yl-3dR9jToGlyykqMAOSXsw",
    authDomain: "ur-notes-48e65.firebaseapp.com",
    projectId: "ur-notes-48e65",
    storageBucket: "ur-notes-48e65.appspot.com",
    messagingSenderId: "402834587534",
    appId: "1:402834587534:web:9f88ab7c8e1a54f4d0eedf",
    measurementId: "G-W0YNBTHPB0"
  };

  firebase.initializeApp(firebaseConfig);
  
 export const db = firebase.firestore();

