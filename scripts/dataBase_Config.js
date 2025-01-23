const firebaseConfig = {
  apiKey: "AIzaSyCNaT1qAcSs6sua6w6CmO0uz0IGpa6OmN0",
  authDomain: "lessons-ebc69.firebaseapp.com",
  projectId: "lessons-ebc69",
  storageBucket: "lessons-ebc69.appspot.com",
  messagingSenderId: "914516791660",
  appId: "1:914516791660:web:3c73d50e1d8c89dd2ce349",
  measurementId: "G-80NCF2H66J"
};

firebase.initializeApp(firebaseConfig)

const db   = firebase.firestore();
const auth = firebase.auth();

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyC290GUMDWK3RV2YOrg7hUk87Eg-sD4Ymw",
//   authDomain: "lessons-ebc69.firebaseapp.com",
//   projectId: "lessons-ebc69",
//   storageBucket: "lessons-ebc69.appspot.com",
//   messagingSenderId: "914516791660",
//   appId: "1:914516791660:web:5b5aa536e137b4222ce349",
//   measurementId: "G-5HH9XQFMXY"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);