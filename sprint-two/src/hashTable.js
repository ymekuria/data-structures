

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arrayOfTuples = this._storage.get(index);
  if (arrayOfTuples === undefined){
    this._storage.set(index, []);
    arrayOfTuples = this._storage.get(index);
  }
  for (var i = 0; i < arrayOfTuples.length; i++){
      if (arrayOfTuples[i][0] === k){
        arrayOfTuples[i] = [k,v];
      } 

  }
 // console.log('arrayOfTuples:', arrayOfTuples);

 // arrayOfTuples.push([k,v])
  var isContained = false;
  for (var j = 0; j < arrayOfTuples.length; j++){
    
    if(arrayOfTuples[j][0] === k ){
    

      isContained = true;
        //  console.log('isContained:',isContained);
    }  
  }
     
  if(!isContained){ 
      arrayOfTuples.push([k,v]);  
  }     
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var keyValue =  this._storage.get(index);
 
  if (!keyValue){
    return undefined;
  }
  for (var i = 0 ; i < keyValue.length ; i++) {
    if (keyValue[i][0] === k){
      return keyValue[i][1];
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  this._storage.each(function(indexArr,index,nestedArray){

    if(indexArr && indexArr[0][0] === k){
 
      indexArr[0] = [];
    }
  
  })

};

var hashTable = new HashTable();

/*
 * Complexity: What is the time complexity of the above functions?
 */


