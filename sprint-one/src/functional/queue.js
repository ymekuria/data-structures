var Queue = function() {
  var someInstance = {};
  var size = 0;
  var stackSize = 0;
  var firstValue = 1;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    stackSize++;
    someInstance[stackSize] = value;
    console.log('someInstance inside enqueue:', someInstance)
  };

  someInstance.dequeue = function() {
    var poppedValue = someInstance[firstValue];
    console.log("someInstance[firstValue]", someInstance[firstValue])
    console.log("first value: ", firstValue)
     console.log("poppedValue: ",poppedValue);


    size --;
    if(stackSize === 0) {
      firstValue = 1;

    } else{
      firstValue++;
    }
    
   
    return poppedValue;
  };

  someInstance.size = function() {
    return size >= 0 ? size : 0;
  };

  return someInstance;
};
