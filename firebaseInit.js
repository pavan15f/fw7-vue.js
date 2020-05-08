import firebase from 'firebase';
import 'firebase/firestore' 
import firebaseConfig from './firebaseConfig' 
const firebaseApp = firebase.initializeApp(firebaseConfig) 
const auth = firebase.auth(); 
const db = firebase.firestore(); 
  export default {db,auth} 