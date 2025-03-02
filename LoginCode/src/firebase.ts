import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBov9yX__e_l8Xca_hlGLlYzjzzivMfH9k",
  authDomain: "userauthpage-b8639.firebaseapp.com",
  projectId: "userauthpage-b8639",
  storageBucket: "userauthpage-b8639.firebasestorage.app",
  messagingSenderId: "1034132590805",
  appId: "1:1034132590805:web:f99972ea32f6a6bf05125c",
  measurementId: "G-XX86KZYJZR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
