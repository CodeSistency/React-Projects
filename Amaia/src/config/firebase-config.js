// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  projectId: "moda-amaia",
  apiKey: "AIzaSyA43FSnvJwAD2y1OG92vSnt9F7j3u-ZKfk",
  authDomain: "moda-amaia.firebaseapp.com",
  projectId: "moda-amaia",
  storageBucket: "moda-amaia.appspot.com",
  messagingSenderId: "44085945364",
  appId: "1:44085945364:web:deb8bdb6c185046a7e3301",
  measurementId: "G-LCF0GC5XRW"
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)