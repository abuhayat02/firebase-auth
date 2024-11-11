// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEq74ixLnpYZf0FHEgDRJ-5wn_QA7giO8",
  authDomain: "privet-routes-and-secqurity.firebaseapp.com",
  projectId: "privet-routes-and-secqurity",
  storageBucket: "privet-routes-and-secqurity.firebasestorage.app",
  messagingSenderId: "453835244801",
  appId: "1:453835244801:web:383ea854fef2984a1a4700",
  measurementId: "G-F4798W5FEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


let auth = getAuth(app);
export default auth ;
