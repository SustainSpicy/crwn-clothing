import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC3_JfDYl4xfq9PjDuopvv7hxKUh9PClUQ",
    authDomain: "crown-db-4527d.firebaseapp.com",
    databaseURL: "https://crown-db-4527d.firebaseio.com",
    projectId: "crown-db-4527d",
    storageBucket: "",
    messagingSenderId: "943638058773",
    appId: "1:943638058773:web:1e348b6a38b23050f27b1c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;