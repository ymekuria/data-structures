var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.stackSize = 0;
  queue.firstValue = 1;
  queue.stackIndex = 0;
  return queue;
};

var queueMethods = {
  enqueue: function(value){
    this.stackSize++;
    this.stackIndex++;
    this[this.stackIndex] = value;
    
  },
  dequeue: function(){
    var poppedValue = this[this.firstValue];
    delete this[this.firstValue];

    this.firstValue++;
    this.stackSize > 0 ? this.stackSize-- : 0;
    return poppedValue;

  },
  size: function(){
    return this.stackSize;
  }
};


