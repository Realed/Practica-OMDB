import * as firebase from "firebase/app"
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyBSULsEvs-Ig6xfG3Ccj1SfchLxja1t268",
    authDomain: "movie-search-omdb.firebaseapp.com",
    databaseURL: "https://movie-search-omdb.firebaseio.com",
    projectId: "movie-search-omdb",
    storageBucket: "movie-search-omdb.appspot.com",
    messagingSenderId: "157654252686",
    appId: "1:157654252686:web:cfdaaf9540de411dea9ddf",
    measurementId: "G-SR598JSH1Y"
};
firebase.initializeApp(firebaseConfig);

export default firebase