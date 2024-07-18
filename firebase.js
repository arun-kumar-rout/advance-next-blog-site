import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAsUErvd1yAy9k83EjSNeSY1_aj0FbYOq8",
  authDomain: "adv-next-blog-site.firebaseapp.com",
  projectId: "adv-next-blog-site",
  storageBucket: "adv-next-blog-site.appspot.com",
  messagingSenderId: "1043974717046",
  appId: "1:1043974717046:web:e0abefaad7d50b67942957",
  measurementId: "G-N8YT0T13XE",
  databaseURL: "https://adv-next-blog-site-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);