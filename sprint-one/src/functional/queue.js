var Queue = function() {
  var someInstance = {};
  var stackSize = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    stackSize++;
    someInstance[stackSize] = value;
  };

  someInstance.dequeue = function() {
    var poppedValue = someInstance["1"]
    stackSize--;
    return poppedValue;
  };

  someInstance.size = function() {
    return stackSize >= 0 ? stackSize : 0;
  };

  return someInstance;
};
