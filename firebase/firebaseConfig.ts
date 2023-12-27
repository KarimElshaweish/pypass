import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  AUTH_DOMAIN,
  DATA_BASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGNING_SENDER_ID,
  APP_ID,
  FIREBASE_API_KEY,
} from "@env";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
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
