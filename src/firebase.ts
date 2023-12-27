import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9DT5aMdIk4L0qQ0cmrhwTDii415UL0O4",
  authDomain: "instogram-1c5f9.firebaseapp.com",
  projectId: "instogram-1c5f9",
  storageBucket: "instogram-1c5f9.appspot.com",
  messagingSenderId: "519085135393",
  appId: "1:519085135393:web:79c410258728e854d4b560",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);