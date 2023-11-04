
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDQP4_uwGkSAaEOIG-Hi-HIOHi6XYujk6c",
  authDomain: "dimple-firebase-a3886.firebaseapp.com",
  projectId: "dimple-firebase-a3886",
  storageBucket: "dimple-firebase-a3886.appspot.com",
  messagingSenderId: "47808794432",
  appId: "1:47808794432:web:e8426d46aed32f33be74a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)