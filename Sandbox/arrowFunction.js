// var names = ['Vlad', 'Sasha', 'Julia', 'July'];
//
// names.forEach(function (name) {
//    console.log('forEach', name);
// });
//
// names.forEach((name) =>
// {
//    console.log('forEach form arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// ///////////////////////////////////////////////
//
// var returnThis = (name) => name + '!';
// console.log(returnThis('Vlad'));
//
//
// var person = {
//    name: 'VLAD',
//     greet: function () {
//       names.forEach((name) => {
//          console.log(this.name + ' Hi to ' + name );
//       });
//     }
// };
//
// person.greet();
//
// function add (a, b) {
//    return a + b;
// }
//
// console.log(add(1, 3));
// console.log(add(9, 0));
//
// var add2 = (a , b) => {return a + b;};
//
// console.log(add2(2,2));

var add3 = (a , b) => a + b;

var done = () => {
    console.log(add3(2, 2));

    setTimeout(() => {
        console.log(add3(4,4));
    }, 3001);
};

add3(3,3);
done();