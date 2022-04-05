import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBcKRNPiU2r1_rpC4OJqKYdU1Wu9LPcQCo",

    authDomain: "municipalitybc.firebaseapp.com",
  
    projectId: "municipalitybc",
  
    storageBucket: "municipalitybc.appspot.com",
  
    messagingSenderId: "696504928225",
  
    appId: "1:696504928225:web:f43cd8847b0b0f147734a0",
  
    measurementId: "G-5T291Z1HFQ"
};

const app =  initializeApp(firebaseConfig);

export const db = getFirestore(app);