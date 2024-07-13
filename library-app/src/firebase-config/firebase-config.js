import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDegOmGS50ie4crAY4gYKUimA8bG76NvxA",
  authDomain: "books-system-32296.firebaseapp.com",
  projectId: "books-system-32296",
  storageBucket: "books-system-32296.appspot.com",
  messagingSenderId: "914605334089",
  appId: "1:914605334089:web:86d2ebf4586186fefb6998",
  measurementId: "G-RQL3GGW0TT",
  databaseURL:
    "https://books-system-32296-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const databaseURL =
  "https://books-system-32296-default-rtdb.europe-west1.firebasedatabase.app/";
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {databaseURL };
