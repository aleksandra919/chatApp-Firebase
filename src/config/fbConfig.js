import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' //do wywalenie

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCbv3gNEkgWJgzi9lsr4NGU6-ohI-Cr2Yc",
    authDomain: "chatappstore-3e961.firebaseapp.com",
    databaseURL: "https://chatappstore-3e961.firebaseio.com",
    projectId: "chatappstore-3e961",
    storageBucket: "chatappstore-3e961.appspot.com",
    messagingSenderId: "665955700875"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;
