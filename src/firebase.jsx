import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyClgnhemaQD9I1fA3I2_pAXcKE-knO_krA",
  authDomain: "svimla-interior.firebaseapp.com",
  projectId: "svimla-interior",
  storageBucket: "svimla-interior.appspot.com",
  messagingSenderId: "688462905079",
  appId: "1:688462905079:web:e11a23b7c2b738bcd31df2",
  measurementId: "G-L41E3SJRJL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);