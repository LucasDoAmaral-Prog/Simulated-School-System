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
