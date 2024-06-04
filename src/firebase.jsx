// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4H4GU9HG6oht3xDE49vj-SlzUjqCNNgA",
  authDomain: "store-tutorial-9e6b2.firebaseapp.com",
  projectId: "store-tutorial-9e6b2",
  storageBucket: "store-tutorial-9e6b2.appspot.com",
  messagingSenderId: "356223563426",
  appId: "1:356223563426:web:520e6a2f5e35f9a3a0c9fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();