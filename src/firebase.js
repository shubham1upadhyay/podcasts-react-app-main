// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw7-KIeBHEvJpxYAgL1NlpUUPYOxrEg4w",
  authDomain: "podcast-project-react-10413.firebaseapp.com",
  projectId: "podcast-project-react-10413",
  storageBucket: "podcast-project-react-10413.appspot.com",
  messagingSenderId: "377193911732",
  appId: "1:377193911732:web:62a84b013faa59d17acee1",
  measurementId: "G-953T0BH1XK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
