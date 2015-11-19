var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 

  var stack = Object.create(stackMethods);
  stack.stackSize = 0;
  stack.firstValue = 1;
  return stack;
};

var stackMethods = {
  push: function (value){
    this.stackSize++;
    this[this.stackSize] = value;

  },
  pop: function(){
    var poppedValue = this[this.stackSize];
    this.stackSize > 0 ? this.stackSize-- : 0;
    return poppedValue;
  },
  size: function(){
    return this.stackSize;
  }
};


