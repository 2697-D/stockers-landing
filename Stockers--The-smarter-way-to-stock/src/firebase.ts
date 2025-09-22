import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// IMPORTANT: Replace this with your own Firebase project configuration.
// You can get this from the Firebase console:
// Project settings > General > Your apps > SDK setup and configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO6CvHIHtvyT3SvbP6hAJwaoRK_KwDC-U",
  authDomain: "stockers-auth.firebaseapp.com",
  projectId: "stockers-auth",
  storageBucket: "stockers-auth.firebasestorage.app",
  messagingSenderId: "590444637616",
  appId: "1:590444637616:web:65aaa1aab79faaf53ffa75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
