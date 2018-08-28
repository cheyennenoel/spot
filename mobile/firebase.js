import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: window.firebaseKey,
  authDomain: "spot-acd8a.firebaseapp.com",
  databaseURL: "https://spot-acd8a.firebaseio.com/",
  storageBucket: "gs://spot-acd8a.appspot.com"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;