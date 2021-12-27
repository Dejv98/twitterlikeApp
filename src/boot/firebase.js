import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBzZLf3vis9-IXC9o63cv4XSL7Uyq8UxLs",
  authDomain: "qwitter-70f27.firebaseapp.com",
  projectId: "qwitter-70f27",
  storageBucket: "qwitter-70f27.appspot.com",
  messagingSenderId: "714092559193",
  appId: "1:714092559193:web:0c112aedb4c23c67232a48"
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db