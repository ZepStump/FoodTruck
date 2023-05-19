// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA30U-zRepoGz4wyowIs40XcWH4aJ1nauQ",
  authDomain: "foodtruck-ca437.firebaseapp.com",
  projectId: "foodtruck-ca437",
  storageBucket: "foodtruck-ca437.appspot.com",
  messagingSenderId: "1021512983032",
  appId: "1:1021512983032:web:97e95e2095dab70838b60d",
  measurementId: "G-DXVFQCWHX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);