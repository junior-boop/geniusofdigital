// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFytT0lUnceAI_WP3Bx3D21KEKoR2l1jw",
  authDomain: "geniusofdigital-e3dad.firebaseapp.com",
  projectId: "geniusofdigital-e3dad",
  storageBucket: "geniusofdigital-e3dad.appspot.com",
  messagingSenderId: "645452793568",
  appId: "1:645452793568:web:ec228cae4c10c97ab43285",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
