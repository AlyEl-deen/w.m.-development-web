// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWpVWIhanYY51Z1dklCKHlcIIRCtXfXr8",
  authDomain: "wmd-office-web.firebaseapp.com",
  projectId: "wmd-office-web",
  storageBucket: "wmd-office-web.firebasestorage.app",
  messagingSenderId: "1062269186222",
  appId: "1:1062269186222:web:d9ca69db4d249e7c77bd3f",
  measurementId: "G-P8G2GJNXN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);