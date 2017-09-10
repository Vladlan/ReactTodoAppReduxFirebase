import firebase from 'firebase';

try {
    var config = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        storageBucket: process.env.STORAGE_BUCKET,

        //React Todo App Test
        // apiKey: "AIzaSyA2syKB2fy-xZvarPydnqFF-SIEvna-Nck",
        // authDomain: "react-todo-app-test-ac45f.firebaseapp.com",
        // databaseURL: "https://react-todo-app-test-ac45f.firebaseio.com",
        // storageBucket: "react-todo-app-test-ac45f.appspot.com",

// //React Todo App development
//         apiKey: "AIzaSyCYNP3PO89X0dtcuI_5PN0BjhBGP0zdUTI",
//         authDomain: "react-todo-app-development.firebaseapp.com",
//         databaseURL: "https://react-todo-app-development.firebaseio.com",
//         storageBucket: "react-todo-app-development.appspot.com",


    };

firebase.initializeApp(config);
} catch (e) {
    console.log('Error in index.js: ', e);
};
//
export var firebaseRef = firebase.database().ref();
export default firebase;
