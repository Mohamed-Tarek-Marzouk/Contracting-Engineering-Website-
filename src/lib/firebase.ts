// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  projectId: "tekam-online",
  appId: "1:84999265106:web:43433647bec523a8a7f88b",
  storageBucket: "tekam-online.appspot.com",
  apiKey: "AIzaSyAiRuNaZgqCfB1i2MBCHbT1sUGLnv_BRMk",
  authDomain: "tekam-online.firebaseapp.com",
  messagingSenderId: "84999265106",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
