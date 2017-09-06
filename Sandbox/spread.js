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


var groupA = ['Vlad', 'Max'];
var groupB = ['Sergey', 'Dima'];
var final = [3, ...groupA, ...groupB]
console.log(final);
var final = [3, groupA, groupB];

console.log(final);

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

var Obj1 = {
    1111: {
        text: 'text 1111'
    },
    1112: {
        text: 'text 1112'
    },
    1113: {
        text: 'text 1113'
    },
    1114: {
        text: 'text 1114'
    }
};

// Object.keys(Obj1).forEach((todoId) => {
//     console.log('todoId: ', todoId);
// });
// ANSWER:
// todoId:  1111
// todoId:  1112
// todoId:  1113
// todoId:  1114

var parsedTodos = [];
Object.keys(Obj1).forEach((todoId) => {
    parsedTodos.push({
        id: todoId,
        ...Obj1[todoId]
    });
    console.log('parsedTodos now: ', parsedTodos);
});
// ANSWER:
// parsedTodos now:  Array [ Object ]
// parsedTodos now:  Array [ Object, Object ]
// parsedTodos now:  Array [ Object, Object, Object ]
// parsedTodos now:  Array [ Object, Object, Object, Object ]