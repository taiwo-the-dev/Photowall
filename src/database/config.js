import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAGwjJcLK-UjjgNMXmSH-LXDgP7CbWZjbU",
    authDomain: "myphotowall-b907b.firebaseapp.com",
    databaseURL: "https://myphotowall-b907b.firebaseio.com",
    projectId: "myphotowall-b907b",
    storageBucket: "myphotowall-b907b.appspot.com",
    messagingSenderId: "868282119334",
    appId: "1:868282119334:web:bdc257bfa911494d1db067",
    measurementId: "G-T9TVRY2KB8"
};

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export {database}