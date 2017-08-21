// function add(a, b) {
//     return a + b
// };
//
// console.log(add(2,2));
//
// var toAdd = [9,5];
//
// console.log(add(toAdd[0], toAdd[1]));
//
// console.log(add(...toAdd));


// var groupA = ['Vlad', 'Max'];
// var groupB = ['Sergey', 'Dima'];
// var final = [3, ...groupA, ...groupB];
// var final = [3, groupA, groupB];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jan', 31];

function greet (name, age) {
    console.log('Hi ' + name + " you are " + age + ' old!')
};

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Xander'];
var NamesFinal = ['Andrew', ...names];
NamesFinal.forEach(function(item) {
    console.log('Hi ' + item);
});