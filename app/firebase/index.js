import firebase from 'firebase';
try {
    var config = {
        apiKey: "AIzaSyCT2eG-wNE0NQaom78oJj1EkPAU3TVVoTw",
        authDomain: "react-todo-app-vladlan.firebaseapp.com",
        databaseURL: "https://react-todo-app-vladlan.firebaseio.com",
        projectId: "react-todo-app-vladlan",
        storageBucket: "react-todo-app-vladlan.appspot.com",
        messagingSenderId: "1049220210156"
    };

firebase.initializeApp(config);
} catch (e) {

};

export var firebaseRef = firebase.database().ref();
export default firebase;
