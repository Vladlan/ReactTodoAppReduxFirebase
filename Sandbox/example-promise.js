// function getTempCallback(location, callback) {
//    callback(undefined, 26);
//    callback('City no found');
// }
//
// getTempCallback('Brest', function (err, temp) {
//     if (err) {
//         console.log('error', err);
//     }
//     else {
//         console.log('success', temp);
//     }
// });
//
// function getTempPromise(location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(26);
//             reject('City not found');
//         }, 1000);
//     });
// }
//
// getTempPromise('Brest').then(function (temp) {
//     console.log('promise success', temp);
// }), function (err) {
//     console.log('promise', err);
// };
//
// getTempPromise(undefined).then(function (temp) {
//     console.log('promise success', temp);
// }), function (err) {
//     console.log('promise', err);
// };

function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
             resolve('a + b = '+ a + ' + ' + b + ' = ' + (a+b));
        }
        else {
            reject('wrong input!');
        }
    });
}
    addPromise(4, 4).then(function (temp) {
        console.log('promise success', temp);
    },
        function (err) {
    console.log('promise with error', err);
    }
);

addPromise('f', 4).then(
    function (temp) {
    console.log('promise success', temp);
    },
    function (err) {
    console.log('promise with error', err);
    }
);