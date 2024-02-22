// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-real-estate-5e4fd.firebaseapp.com",
    projectId: "mern-real-estate-5e4fd",
    storageBucket: "mern-real-estate-5e4fd.appspot.com",
    messagingSenderId: "116854223043",
    appId: "1:116854223043:web:b0c390671bb930533ef276"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;