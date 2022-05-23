// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeYsf5Cop9x_CuXvrNcmmg-DgMsD20m28",
  authDomain: "facmaster-factory.firebaseapp.com",
  projectId: "facmaster-factory",
  storageBucket: "facmaster-factory.appspot.com",
  messagingSenderId: "1024923612551",
  appId: "1:1024923612551:web:36ed20ac2e7c10c4af0f22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;