// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLJ-Odtbgcvf1ZhMNu668LcIbM4ZA4720",
  authDomain: "netflix-clone-fd2dc.firebaseapp.com",
  projectId: "netflix-clone-fd2dc",
  storageBucket: "netflix-clone-fd2dc.appspot.com",
  messagingSenderId: "689902765925",
  appId: "1:689902765925:web:544a94f83dbbc8430f438c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();