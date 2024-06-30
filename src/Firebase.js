
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBxNJR4xWZ6OZ8Z3AmH-GQrCCYb5F39wYg",
  authDomain: "reactfirebaseprav.firebaseapp.com",
  projectId: "reactfirebaseprav",
  storageBucket: "reactfirebaseprav.appspot.com",
  messagingSenderId: "502509096595",
  appId: "1:502509096595:web:b0da5240abfbcaf3e18766"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db=getFirestore(app);