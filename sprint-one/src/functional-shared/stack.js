var Stack = function() {
  var stack = {
  stackSize: 0
  };
 
  _.extend(stack, stackMethods);
  return stack;
};


var stackMethods = {
  pop: function(){
    this.stackSize > 0 ? this.stackSize-- : 0;

  },

  push: function(value){
    this.stackSize++;
  },

  size: function(){
    return this.stackSize;
  }
};


