// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration.
// Values come from Vite env vars when available, falling back to the
// project defaults so the app also works in static builds (e.g. GitHub Pages)
// where no .env file is present.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBWpVWIhanYY51Z1dklCKHlcIIRCtXfXr8",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "wmd-office-web.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "wmd-office-web",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "wmd-office-web.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1062269186222",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1062269186222:web:d9ca69db4d249e7c77bd3f",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-P8G2GJNXN1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore: support an optional named database, otherwise use the default.
const databaseId = import.meta.env.VITE_FIRESTORE_DATABASE_ID;
export const db =
  databaseId && databaseId !== "your-database-id"
    ? getFirestore(app, databaseId)
    : getFirestore(app);

// Authentication
export const auth = getAuth(app);

// Analytics is only available in supported (browser) environments.
export const analyticsPromise = isSupported().then((supported) =>
  supported ? getAnalytics(app) : null
);

export default app;
// Debug: log active project id to help diagnose permission issues
console.log('[firebase] projectId:', firebaseConfig.projectId);
