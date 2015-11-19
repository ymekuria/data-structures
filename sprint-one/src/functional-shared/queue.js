var Queue = function() {
  var queue = {
    ourSize : 0,
    stackSize : 0,
    firstValue : 1
  }

    _.extend(queue, queueMethods);
  return queue;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  enqueue : function(value){
    this.ourSize++
    this.stackSize++;
    this[this.stackSize] = value; 
  },
  dequeue : function(){
   
    var poppedValue = this[this.firstValue];
    this.ourSize--;
    this[this.stackSize] = this.stackSize > 0 ? this.stackSize-- : 0;
  
    this.firstValue++;
    // console.log("this: ", firstValue,"this")

    return poppedValue;
  },
  size : function(){ 
    return this.ourSize >= 0 ? this.ourSize : 0;
  }
};


