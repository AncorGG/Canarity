// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOIZ5sXnYLjkQOcdWAaiLDjnxliTR0huE",
  authDomain: "canarity-69ee7.firebaseapp.com",
  databaseURL: "https://canarity-69ee7-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "canarity-69ee7",
  storageBucket: "canarity-69ee7.appspot.com",
  messagingSenderId: "244999493161",
  appId: "1:244999493161:web:0b1bcd39b7461d4d3cee38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db;