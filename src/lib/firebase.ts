// Firebase core
import { initializeApp } from "firebase/app";

// Firebase Storage
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOGgoS3pLZ7azljBOlXKFS4L7samr9SLk",
  authDomain: "gustosip-d8ab9.firebaseapp.com",
  projectId: "gustosip-d8ab9",
  storageBucket: "gustosip-d8ab9.firebasestorage.app",
  messagingSenderId: "201729820458",
  appId: "1:201729820458:web:cbe9d301f245607194c053",
  measurementId: "G-M72241Y1F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Storage for file uploads
export const storage = getStorage(app);
