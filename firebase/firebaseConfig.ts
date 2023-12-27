import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  FIREBASE_API_KEY,
  AUTH_DOMAIN,
  DATA_BASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGNING_SENDER_ID,
  APP_ID,
} from "@env";

const firebaseConfig = {
  apiKey: "AIzaSyBoSsErVWH1qUx9SqeiGYxjbfYuHvWg5Zw",
  authDomain: AUTH_DOMAIN,
  databaseURL: DATA_BASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGNING_SENDER_ID,
  appId: APP_ID,
};
// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
