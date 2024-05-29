const fun1 = require('./constructor-export');

console.log('>>>>>>>>>fun1>>>>>>');
fun1.print();
fun1.message = 'this message was reassigned from app.js ';

const fun1_copy = require('./constructor-export');

console.log('>>>>>>>>>fun1_copy>>>>>>');
fun1_copy.print();

const fun2 = require('./reference-export').ExecutionFunction;

console.log('>>>>>>>>>fun2>>>>>>');
fun2();
const fun3 = require('./regular-function');

console.log('>>>>>>>>>fun3>>>>>>');
fun3();
const fun4 = require('./constructor-no-call-export');
const fun4Instance = new fun4();
console.log('>>>>>>>>>fun4>>>>>>');
fun4Instance.print();
fun4Instance.message = 'overridden message from app.js';
fun4Instance.print();
const func5 = require('./save-value-export');
console.log('>>>>>>>>>func5>>>>>>');
func5.print = function () {
  console.log('overridden message from app.js');
};
func5.print()
