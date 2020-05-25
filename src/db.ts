import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCc4pEcEveeKPof4BRpKfAZppo6agQ1eBY",
  authDomain: "stock-trader-2-624f9.firebaseapp.com",
  databaseURL: "https://stock-trader-2-624f9.firebaseio.com",
  projectId: "stock-trader-2-624f9",
  storageBucket: "stock-trader-2-624f9.appspot.com",
  messagingSenderId: "1005434265580",
  appId: "1:1005434265580:web:58b93e9ba768042b6f6ac9",
  measurementId: "G-P061LJE2MP",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
