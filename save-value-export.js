var message = 'this is a message from save value export';
const ExecutionFunction = function () {
  this.print = function () {
    console.log(message);
  };
};
module.exports = new ExecutionFunction();
