function thisContext() {
  this.name = 'ahmed 3mee';
  console.log(this);
}

function globalThisContext() {
  thisContext.apply(this);
}
thisContext.call({ ahmed: true });
console.log(this);

// created in funny moment with my G-{m}
