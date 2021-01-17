import firebase from 'firebase';

let config = {
  apiKey: "AIzaSyAk0PsJrhy1V7mBwa2mj2Caf9fC1zqYP4U",
  authDomain: "miridc-35514.firebaseapp.com",
  databaseURL: "https://miridc-35514.firebaseio.com",
  projectId: "miridc-35514",
  storageBucket: "miridc-35514.appspot.com",
  messagingSenderId: "55899349920",
  appId: "1:55899349920:web:f64dedc06754b2dbdf3ac5"  
};

firebase.initializeApp(config);

export default firebase;