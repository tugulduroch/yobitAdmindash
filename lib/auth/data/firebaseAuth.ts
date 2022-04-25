import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApxPjAsEB7Gre_PsI769sblZiw5ch04Pw",
  authDomain: "yobit-54b2a.firebaseapp.com",
  projectId: "yobit-54b2a",
  storageBucket: "yobit-54b2a.appspot.com",
  messagingSenderId: "160751823241",
  appId: "1:160751823241:web:92b7b92248e49faa761958",
  measurementId: "G-QJPHJ77KC9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
