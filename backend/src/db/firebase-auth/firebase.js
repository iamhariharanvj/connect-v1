import { initializeApp } from "firebase/app";

const connectFirebase = ()=>{

    const firebaseConfig = {

    apiKey: "AIzaSyAcC9LBzYBqY_MqyoGtTtXTcagXU7cQze4",

    authDomain: "connect-6ea08.firebaseapp.com",

    projectId: "connect-6ea08",

    storageBucket: "connect-6ea08.appspot.com",

    messagingSenderId: "1024398677138",

    appId: "1:1024398677138:web:9e99fd23e00e6cfd98824b"

    };


    const app = initializeApp(firebaseConfig);

    return app
}
export default connectFirebase;