const ExecutionFunction = function () {
  this.message = 'this is a message from inherited execution Function';
  this.print = function () {
    console.log(this.message);
  };
};
module.exports = ExecutionFunction;
