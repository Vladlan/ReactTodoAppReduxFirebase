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

var reducer = (state = {name: 'Anonymous'}, action) => {
    return state;
};

var store = redux.createStore(reducer);

console.log('currentState', store.getState());



























