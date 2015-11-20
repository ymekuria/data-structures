

// ------------------------
// Instantiate a new graph
var Graph = function() {
this.nodeArray = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeArray.push(node);
 
  //console.log(graph);

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  console.log("nodeArray in contains:", _.indexOf(this.nodeArray, node));
  if (_.indexOf(this.nodeArray, node) !== -1){
    console.log('inside if')
    return true;
  }else{
    return false;
  }


};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var removeIndex = _.indexOf(this.nodeArray, node);
  this.nodeArray.splice(removeIndex, 1);
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var graph = new Graph(); 



