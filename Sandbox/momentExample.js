var moment = require('moment');

console.log(moment().format());
console.log(moment().unix());

var timestamp = moment().unix();
var currentMoment = moment.unix(timestamp);
console.log('timestamp', currentMoment.format());
console.log('timestamp', currentMoment.format("MMM"));
// "dddd, MMMM Do YYYY, h:mm:ss a"); 
// "Sunday, February 14th 2010, 3:25:50 pm"
console.log('timestamp', currentMoment.format("H:mm:ss, MMMM Do YYYY"));