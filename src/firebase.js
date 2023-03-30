import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrwlmBh_RQNTpHV4U7Mn06O6YW7cEV3LE",
  authDomain: "realtime-chat-react-c14a2.firebaseapp.com",
  projectId: "realtime-chat-react-c14a2",
  storageBucket: "realtime-chat-react-c14a2.appspot.com",
  messagingSenderId: "515457402624",
  appId: "1:515457402624:web:f4bf40ff6fac9a33a655e5",
  measurementId: "G-DW74PKW88Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()