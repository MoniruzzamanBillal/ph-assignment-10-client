// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXoGDyog7UyyAQXibwMT5UDNBG_e9AkjU",
  authDomain: "brand-shop-76b08.firebaseapp.com",
  projectId: "brand-shop-76b08",
  storageBucket: "brand-shop-76b08.appspot.com",
  messagingSenderId: "182944682037",
  appId: "1:182944682037:web:9feb600d3ead132788617c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
