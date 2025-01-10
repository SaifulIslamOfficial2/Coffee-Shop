

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtC7ooUgR9utjDfSa_cI8_mnfG9wa1Tf4",
  authDomain: "coffee-2a657.firebaseapp.com",
  projectId: "coffee-2a657",
  storageBucket: "coffee-2a657.firebasestorage.app",
  messagingSenderId: "707076607913",
  appId: "1:707076607913:web:39c5fb78e63a235c307eb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};