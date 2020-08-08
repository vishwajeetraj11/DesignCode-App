import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBfNRQvgWpa6fGI4CUHNoffSBb4D6xg3HQ",
  authDomain: "design-code-app.firebaseapp.com",
  databaseURL: "https://design-code-app.firebaseio.com",
  projectId: "design-code-app",
  storageBucket: "design-code-app.appspot.com",
  messagingSenderId: "180688286510",
  appId: "1:180688286510:web:013f4a4cff1a67200e80bf"
};

firebase.initializeApp(firebaseConfig);

export default firebase