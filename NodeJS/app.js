(function(lastname) {
    var firstname = 'John';
    console.log(firstname + ' ' + lastname);
}('Doe'));

var firstname = 'Jane';
console.log(firstname);

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

/**
person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function () {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
};

person.greet();

console.log(person['firstname']);
**/

/**
function Person (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}

var john = new Person('John', 'Peter');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
**/