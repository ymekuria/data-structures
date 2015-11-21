

// ------------------------
// Instantiate a new graph
var Graph = function() {
this.nodeArray = [];
this.edges = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeArray.push(node);
 
  // console.log(graph);

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // console.log("nodeArray in contains:", _.indexOf(this.nodeArray, node));
  if (_.indexOf(this.nodeArray, node) !== -1){
    // console.log('inside if')
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
  var edgeString = JSON.stringify(fromNode) + "," + JSON.stringify(toNode);
  var reverseEdgeString = JSON.stringify(toNode) + "," + JSON.stringify(fromNode);
  // console.log("reverseString : " ,reverseEdgeString);
  // console.log("fromNode :", fromNode, "toNode : ", toNode)
// this.edges.hasOwnProperty(edgeString) === true//
  if(this.edges[edgeString] === reverseEdgeString || this.edges[reverseEdgeString] === edgeString ){
    return true;
  }

  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var edgeString = JSON.stringify(fromNode) + "," + JSON.stringify(toNode);
  var reverseEdgeString = JSON.stringify(toNode) + "," + JSON.stringify(fromNode);
  this.edges[edgeString] = reverseEdgeString;

};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var edgeString = JSON.stringify(fromNode) + "," + JSON.stringify(toNode);
  delete this.edges[edgeString];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodeArray, function(element){
    cb(element);
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var graph = new Graph(); 



