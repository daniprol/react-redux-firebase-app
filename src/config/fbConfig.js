// Your web app's Firebase configuration
import firebase from 'firebase/app'
import 'firebase/firestore' // this is the database
import 'firebase/auth'
import 'firebase/analytics'


export const firebaseConfig = {
    apiKey: "AIzaSyBH1i2XLRPt3-8m5acHzQrV4Pmyx6SgHqg",
    authDomain: "redux-marioplan-69bb1.firebaseapp.com",
    databaseURL: "https://redux-marioplan-69bb1.firebaseio.com",
    projectId: "redux-marioplan-69bb1",
    storageBucket: "redux-marioplan-69bb1.appspot.com",
    messagingSenderId: "305460821942",
    appId: "1:305460821942:web:a52e34a23a6f0290f7cb17",
    measurementId: "G-3BK2MMCTM5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
//   firebase.firestore().settings({ timestampsInSnapshots: true })
  firebase.firestore()

  export default firebase;