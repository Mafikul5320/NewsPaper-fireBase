import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAnbmqzwnp1KygXCEncRntXxIzDoFBCC2I",
  authDomain: "dragon-news-5d9a6.firebaseapp.com",
  projectId: "dragon-news-5d9a6",
  storageBucket: "dragon-news-5d9a6.firebasestorage.app",
  messagingSenderId: "886415985321",
  appId: "1:886415985321:web:80446fb05c89da1f1837b8"
};


const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);