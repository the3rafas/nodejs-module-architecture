const ExecutionFunction = function () {
  this.message = 'this is a message from execution Function';
  this.print = function () {
    console.log(this.message);
  };
};
module.exports = new ExecutionFunction();
