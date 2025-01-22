import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAOlPs_iIpChebaRtmeja_h0UtlfiJZy0",
  authDomain: "blogverse-3009e.firebaseapp.com",
  projectId: "blogverse-3009e",
  storageBucket: "blogverse-3009e.firebasestorage.app",
  messagingSenderId: "1058307390237",
  appId: "1:1058307390237:web:5a23e06819ad7fab987ff4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();