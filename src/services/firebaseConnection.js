import firebase from 'firebase/app';
import 'firebase/database'; 
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyChe06qHAyvdt-MtQv5VxvFfJ-PH3odm5k",
  authDomain: "financasapp-a7008.firebaseapp.com",
  projectId: "financasapp-a7008",
  storageBucket: "financasapp-a7008.appspot.com",
  messagingSenderId: "561219789448",
  appId: "1:561219789448:web:c23476005b6b80210e753d",
  measurementId: "G-5YHMMVQVXL"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
