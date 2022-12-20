// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwPxhiAdFmjmwby5-WSEJ4EhUROlsLbGw",
    authDomain: "ema-john-simple-e8d04.firebaseapp.com",
    projectId: "ema-john-simple-e8d04",
    storageBucket: "ema-john-simple-e8d04.appspot.com",
    messagingSenderId: "183943620706",
    appId: "1:183943620706:web:2d7b632cf4bedff217c93b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
