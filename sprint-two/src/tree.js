var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree,treeMethods);
  return newTree;

};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childNode = {
    children : []
  };
  _.extend(childNode, treeMethods);
  childNode['value'] = value;
  this.children.push(childNode);
  

};

treeMethods.contains = function(target) {

// console.log('this.children in contains:', this.children);
var containsTarget = false;

  _.each(this.children, function(childObject){
    if(childObject['value'] === target){
      containsTarget = true;
    }
  })

   _.each(this.children, function(childObject){
    _.each(childObject.children, function(nestedChildObject){
      if(nestedChildObject['value'] === target){
        containsTarget = true;
      }
    })  
  })


return containsTarget;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
