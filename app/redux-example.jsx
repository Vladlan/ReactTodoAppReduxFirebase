//
//
// console.log('redux-example.jsx started');
//
// //Pure function:
// function add (a, b) {
//     return a+b
// }
//
// //Are not pure functions
// var a1 = 3;
//
// // #1
// function add1 (b) {
//     return a1 + b;
// }
//
// // #2
// var res;
// function add2 (a, b) {
//     return res = a + b;
// }
//
// //#3
// function add3 (a, b) {
//     return a + b + new Date().getSeconds();
// }
//
// function changeProp(obj) {
//     // return {
//     //     ...obj,
//     //     name: 'Vlad'
//     // };
//
//     obj.name = 'Vlad';
//     return obj
// };
//
// var startingValue = {
//     name: 'Andrew',
//     age: '23'
// };
//
// var res = changeProp(startingValue);
// console.log(startingValue);
// console.log(res);
var redux = require("redux");
console.log('Redux example started');

var actions = require('./actions/index.jsx');
var store = require('./store/configureStoreIndex.jsx').configure();

//Subscribe to changes
var stopStartSubscribe = store.subscribe(()=> {
    var state = store.getState();
    console.log('New state', store.getState());

    if (state.map.isFetching) {
        document.getElementById('app0').innerHTML = 'Loading...';
    }
    else if (state.map.url) {
        document.getElementById('app0').innerHTML = '<a href="' +
            state.map.url + '" target="_blank">View your location</a>';
    }
});


store.dispatch(actions.changeName('Andrew'));
console.log('Name should be Andrew', store.getState());
store.dispatch(actions.changeName('Liza'));
store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Running2'));
store.dispatch(actions.addMovie('Wag the dog','Thriller'));
store.dispatch(actions.addMovie('Inception','Action'));
store.dispatch(actions.removeMovie(2));
store.dispatch(actions.removeHobby(1));

store.dispatch(actions.fetchLocation());
























