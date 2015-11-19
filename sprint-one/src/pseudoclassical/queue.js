var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize  = 0;
  this.firstValue = 1; 
  this.stackIndex = 0;
};

Queue.prototype.enqueue = function(value){
  this.stackIndex++;
  this.stackSize++;
  this[this.stackIndex] = value;

  
};

Queue.prototype.dequeue = function(){
  var poppedValue = this[this.firstValue];
  delete this[this.firstValue];
 // this.stackIndex++;
  this.firstValue++;
  this.stackSize > 0 ? this.stackSize-- : 0; 
  // if(this.stackSize === 0) {
  //   this.firstValue = 1;
  // } else{
  //   this.firstValue++
  // }
 // debugger;
  return poppedValue;
};

Queue.prototype.size = function(){
  return this.stackSize;
};

var queue = new Queue();