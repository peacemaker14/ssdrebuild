import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBhGYL9ULsR0xDbxVPrZrUSLPor15zdS6E",
  authDomain: "sale-stock-66121.firebaseapp.com",
  databaseURL: "https://sale-stock-66121.firebaseio.com",
  projectId: "sale-stock-66121",
  storageBucket: "sale-stock-66121.appspot.com",
  messagingSenderId: "355579003527"
};

const fire = firebase.initializeApp(config)

export default fire
