var Stack = function() {
  var stack = {
  stackSize: 0
  };
 
  _.extend(stack, stackMethods);
  return stack;
};


var stackMethods = {
  pop: function(){
    var currentStack = this.stackSize;
   var poppedValue = this[currentStack];
   // console.log('poppedValue: ', poppedValue,'this.stackSize: ',this.stackSize);
   
    this.stackSize > 0 ? this.stackSize-- : 0;

   return poppedValue

  },

  push: function(value){
    this.stackSize++;
    var currentStack = this.stackSize;
    this[currentStack] = value;
    
   
  },

  size: function(){
    
    return this.stackSize;
  }
};


