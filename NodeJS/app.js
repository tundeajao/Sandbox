var greet2 = require('./greet.js')

function Greet() {
    console.log('Hi Tunde');
}

function SendGreet(fn){
    fn();
}

SendGreet(Greet);

greet2();

