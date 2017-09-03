import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCT2eG-wNE0NQaom78oJj1EkPAU3TVVoTw",
    authDomain: "react-todo-app-vladlan.firebaseapp.com",
    databaseURL: "https://react-todo-app-vladlan.firebaseio.com",
    projectId: "react-todo-app-vladlan",
    storageBucket: "react-todo-app-vladlan.appspot.com",
    messagingSenderId: "1049220210156"
};

firebase.initializeApp(config);

firebase.database().ref().set({
    app: {
        name: 'React Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Vlad',
        age: 23
    },
    todos: {
        '123abc': {
            text: 'do smth'
}
    }

}).then(() => {
    console.log('Set worked');
}, (e) => {
    console.log('Set failed');
});

// // firebase.database().ref().set({
// //     name: 'React Todo App2'
// // });
//
// // firebase.database().ref().child('user').set({
// //     name: 'Vlad2',
// //     age: 24
// // });
// //
// // firebase.database().ref().child('app').set({
// //     version: '1.0.1'
// // });
//
//
// // firebase.database().ref().update({
// //     'app/name': 'React Todo App 2',
// //     isRunning: false
// // });
// //
// // firebase.database().ref().child('app').update({
// //     name: 'React Todo App 3'
// // }).then(() => {
// //     console.log('Update worked');
// // }, (e) => {
// //     console.log('Update failed');
// // });
// //
// // firebase.database().ref().child('app').update({
// //     name: 'Todo Application'
// // });
// // firebase.database().ref().child('user').update({
// //     name: 'Vlad3',
// // });
//
// // firebase.database().ref().child('user/age').remove();
// /*firebase.database().ref().child('app').update({
//     version: '2.0.0',
//     name: null
// });*/
//
// // firebase.database().ref().once('value').then((snapshot)=> {
// // console.log('Got entire database', snapshot.val());
// // }, (e) => {
// //     console.log('Unable to fetch value', e);
// // });
//
// // firebase.database().ref().child('app').once('value').then((snapshot)=> {
// //     console.log('Got some data from database', snapshot.key ,snapshot.val());
// // }, (e) => {
// //     console.log('Unable to fetch value', e);
// // });

//Add listener .on
// firebase.database().ref().on('value', (snapshot) => {
//     console.log('database has been changed', snapshot.val());
// });
//
// firebase.database().ref().update({isRunning: false});
//
//
//
// firebase.database().ref().update({isRunning: true});
// firebase.database().ref().update(
//     {
//         'app/name': 'React Todo App 2',
//         'app/version': '3.0.0',
//     }
// );
//
// firebase.database().ref().off();

var firebaseRef = firebase.database().ref();

/*
var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
    console.log('child_added', snapshot.key, snapshot.val());
});

notesRef.on('child_changed', (snapshot) => {
    console.log('child_changed', snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
    console.log('child_removed', snapshot.key, snapshot.val());
});

var newNoteRef = notesRef.push({
    text: 'Wag the dog'
});

//Exactly the same what showed above
// newNoteRef.set({
//     text: 'Wag the dog'
// });
console.log('Note id',newNoteRef.key);*/

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'Todo 1'
});

todosRef.push({
    text: 'Todo 2'
});