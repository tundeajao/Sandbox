/**
var greet2 = require('./greet.js')

function Greet() {
    console.log('Hi Tunde');
}

function SendGreet(fn){
    fn();
}

SendGreet(Greet);

greet2();
**/

person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function () {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
};

person.greet();

console.log(person['firstname']);