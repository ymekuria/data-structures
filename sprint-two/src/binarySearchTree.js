var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};

BinarySearchTree.insert = function(value) {

  var newNode = BinarySearchTree(value) 

//  newNode.value = value;

  if (newNode.value < this.value){
    if (this.left === null){
      this.left = newNode;
    }else{
      var leftObject = this.left;
      
      this.insert.call(leftObject , value);
    }
  }else if (newNode.value > this.value){

    if (this.right === null){
      this.right = newNode;
    }else{
      var rightObject = this.right;
      this.insert.call(rightObject , value); 

    }
  }
};

BinarySearchTree.contains = function(first_argument) {
  // body...
};

BinarySearchTree.depthFirstLog = function(first_argument) {
  // body...
};

binarySearchTree = BinarySearchTree(5);
/*
 * Complexity: What is the time complexity of the above functions?
 */
//this.insert(value, node){argument[1]} 


// // console.log('this', this)
 
// //If the new node value is less than the current nodenode value
//   console.log('start')
//   if (newNode.value < this.value){
//     //go inside the left property
//     //if the left property has a node then
//     // console.log('newNode.value', newNode.value,'this.',this.left)
//     if (this.left !== undefined){
//      // console.log(this.left);
//       //invoke insert on the (node)
//       //this.left.insert(value);
//       this.insert(value, this.left);
//     }else{
//       //add the newnode to the left property of this node
//       this.left = newNode;
//       return
//     }
//   }else{
//     if (this.right !== undefined){
//       //invoke insert on the (node)
//       //this.right.insert(value);
//       this.insert(value,this.right);
//     }else{
//       //add the newnode to the left property of this node
//       this.right = newNode;
//       return;
//     }

//   }