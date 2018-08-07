import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCTc5XjZaHVcAps01IbjhtKcsUB27R6Lnk",
    authDomain: "hackday2018-e450d.firebaseapp.com",
    databaseURL: "https://hackday2018-e450d.firebaseio.com",
    projectId: "hackday2018-e450d",
    storageBucket: "hackday2018-e450d.appspot.com",
    messagingSenderId: "680840896321"
  };
var fire = firebase.initializeApp(config);
export default fire;
