"use client";

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_Giq_EGEIxcavzcO8RenpCIMH8iETPSs",
  authDomain: "yash-software.firebaseapp.com",
  projectId: "yash-software",
  storageBucket: "yash-software.firebasestorage.app",
  messagingSenderId: "333775666671",
  appId: "1:333775666671:web:8aebe02f076c83add78a1a",
  measurementId: "G-05B48SBGP7",
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
