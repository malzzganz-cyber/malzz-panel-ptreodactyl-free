// ============================================================
//  Firebase Client Config — ganti nilai di bawah ini
//  dengan kredensial dari Firebase Console kamu
//  https://console.firebase.google.com → Project Settings
// ============================================================

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEsBWnCBvENSPHSwx2VH4WqVh0uuYrOnA",
  authDomain: "flutter-ai-playground-a9dc6.firebaseapp.com",
  projectId: "flutter-ai-playground-a9dc6",
  storageBucket: "flutter-ai-playground-a9dc6.firebasestorage.app",
  messagingSenderId: "661901486857",
  appId: "1:661901486857:web:03b1f1c7c6d9d610d3c1d8",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
export default app;
