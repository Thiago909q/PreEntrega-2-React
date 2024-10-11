
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "relojeria-neyra.firebaseapp.com",
  projectId: "relojeria-neyra",
  storageBucket: "relojeria-neyra.appspot.com",
  messagingSenderId: "691773776176",
  appId: "1:691773776176:web:216191654628fb1e2728f5"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

