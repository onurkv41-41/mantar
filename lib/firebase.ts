import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqHv_D_yYegfHCkvPwXGzrNrkMqfgl2LI",
  authDomain: "mantar-4598c.firebaseapp.com",
  projectId: "mantar-4598c",
  storageBucket: "mantar-4598c.firebasestorage.app",
  messagingSenderId: "728449123472",
  appId: "1:728449123472:web:aa9b428af897dcbb0c4415",
  measurementId: "G-9RHWDBC9KB",
};

const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);
