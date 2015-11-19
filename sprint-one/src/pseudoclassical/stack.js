var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //Stack.prototype.allMethods
  this.stackSize = 0;
};

Stack.prototype.push = function(value) {
  this.stackSize++;
  this[this.stackSize] = value;
};

Stack.prototype.pop = function(){
  var poppedValue = this[this.stackSize];

  this.stackSize >0 ? this.stackSize-- : 0;
  return poppedValue;
};

Stack.prototype.size = function(){
  return this.stackSize;
};

var stack = new Stack();
