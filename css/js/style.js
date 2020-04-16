'use strict'

var name = prompt('what is your name');
console.log(name);
document.write('<h1>' + 'hello' + '</h1>');

var interested = confirm('are you interested in our subject')
console.log('interested', interested);

if (interested === true) {
    document.write('<h1>' + 'you are welcome' + '<h1>');
} else {
    document.write('<h1>' + 'Ihope you will be interested' + '<h1>');

}