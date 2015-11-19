var Queue = function() {
  var queue = {
    firstValue: 1,
    stackSize: 0,
    stackIndex: 0
  }

    _.extend(queue, queueMethods);
  return queue;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  enqueue : function(value){
   
    this.stackIndex++;

   this[this.stackIndex] = value;
   this.stackSize++;
   
  },
  dequeue : function(){
    //debugger;
    if(this.stackSize === 0 ){
      return 'array is empty'
    }
   var poppedValue = this[this.firstValue];
   delete this[this.firstValue]; 
   this.firstValue++;

  
   if(this.stackSize > 0){
    this.stackSize--;
   } else{
    this.stackSize = 0;
   }
  // debugger;
   return poppedValue;
  },
  size : function(){ 
   return this.stackSize; 
  }
};


