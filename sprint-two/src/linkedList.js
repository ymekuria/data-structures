var LinkedList = function() {
  var list = {};
  var ourList = {};
  var ourListIndex = 0;
  list.head = null;
  list.tail = null;
  

  list.addToTail = function(value) {
     var tailObject = {};
     tailObject['value'] = value;
     if (Object.keys(ourList).length === 0){
      this.head = tailObject;
     }
    
     ourList[ourListIndex] = value;
     ourListIndex++;
     console.log('list inside addToTail: ', ourList);
    console.log('head: ', this.head);
     this.tail = tailObject;

  };

  list.removeHead = function() {
    var indexedArray = Object.keys(ourList);
    var removedHead = ourList[indexedArray[0]];
    delete ourList[indexedArray[0]];
    indexedArray = Object.keys(ourList);
    var newHead = indexedArray[0];
    this.head["value"] = ourList[newHead]; 
    return removedHead;
  };

  list.contains = function(target) {
  };

  return list;
};

var linkedList = LinkedList();


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
