
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_FIREBASE_APPID  

  apiKey: "AIzaSyDPq-WYAu6ZI92W0hBmCf1r-Hs5YcTWc5w",
  authDomain: "cloudcommerce-7a626.firebaseapp.com",
  projectId: "cloudcommerce-7a626",
  storageBucket: "cloudcommerce-7a626.appspot.com",
  messagingSenderId: "58283717839",
  appId: "1:58283717839:web:e957bef62fb58acfb233ba"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
export default app;

