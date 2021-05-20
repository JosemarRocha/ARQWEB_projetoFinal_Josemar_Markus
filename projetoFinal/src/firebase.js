import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAIO1AmAVBJnPgTEPSYfH5PCobkOmNmw_c",
    authDomain: "webarq2020j.firebaseapp.com",
    projectId: "webarq2020j",
    storageBucket: "webarq2020j.appspot.com",
    messagingSenderId: "794316126402",
    appId: "1:794316126402:web:44bcd790f40ef14701e35b"
})

export const auth = app.auth();

export default app;