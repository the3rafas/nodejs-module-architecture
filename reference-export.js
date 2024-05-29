const ExecutionFunction = function () {
  this.message = 'this is a message from reference Function';
  console.log('log out of print function');
  this.print = function () {
    console.log(this.message);
  };
};
module.exports.ExecutionFunction = ExecutionFunction;
