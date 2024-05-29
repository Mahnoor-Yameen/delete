import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5yfMVMdMownppC6M-PZB953IomosQJAg",
  authDomain: "fir-pos-boutique-mern.firebaseapp.com",
  projectId: "fir-pos-boutique-mern",
  storageBucket: "fir-pos-boutique-mern.appspot.com",
  messagingSenderId: "1096371291296",
  appId: "1:1096371291296:web:9a584dc4a6a954af94f5c5"
};


const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)
