import * as firebase from "firebase";
import "firebase/auth";
//import dataConfig from './dataConfig'

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyCsP9MkviNSB6Pcwu2eVQYtPnxyp4-CJkg",
        authDomain: "prueba-sexto-segunda.firebaseapp.com",
        projectId: "prueba-sexto-segunda",
        storageBucket: "prueba-sexto-segunda.appspot.com",
        messagingSenderId: "401886981644",
        appId: "1:401886981644:web:df1250b573415e7f6b8829",
        measurementId: "G-7DSYPB65F6"
    }
);

/*const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();*/

export default app;