// lib/firebase.js
import { initializeApp, getApp, getApps } from 'firebase/app'; // Correct imports for modular API
import { getFirestore } from 'firebase/firestore'; // Firestore import for v9+
import { getAuth } from 'firebase/auth'; // Firebase Auth import for v9+

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase only once
let app;
if (getApps().length === 0) {
  // Initialize the app if it hasn't been initialized
  app = initializeApp(firebaseConfig);
} else {
  // Use the already initialized app
  app = getApp();
}

// Get Firestore and Auth instances
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
