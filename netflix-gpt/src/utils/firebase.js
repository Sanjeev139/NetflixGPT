// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzZxr962WAuQi5QZqg3wbaq9YZSV5JZCs",
  authDomain: "netflixgpt-907af.firebaseapp.com",
  projectId: "netflixgpt-907af",
  storageBucket: "netflixgpt-907af.appspot.com",
  messagingSenderId: "504504611425",
  appId: "1:504504611425:web:7ebb10b7360ac696b3b020",
  measurementId: "G-QNRQ4L5GFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();