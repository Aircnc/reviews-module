// Tree has path to target sum?
// You are given a binary tree whose nodes all have integer values (both positive and negative).

// Given some target sum (say, 14), return true if there is any path starting from the root and ending in a leaf, such that adding up all the values along the path equals the given sum.


// HINT: Even though this problem is about adding up numbers along the way, in problems where you are seeking a target sum it's sometimes helpful to subtract as you go, instead.

//create the binary tree prototype

var treePrototype = {}

BinaryTree = function(value) {

  var bt = Object.create(treePrototype);
  bt.value = value;
  bt.left = null;
  bt.right = null;
  return bt;
}

treePrototype.insert = function(val) {
  if (val < this.value) {
    if (this.left === null) {
      this.left = BinaryTree(val);
    } else {
      this.left.insert(val);
    }
  } else if (val > this.value) {
    if (this.right === null) {
      this.right = BinaryTree(val);
    } else {
      this.right.insert(val);
    }
  }
};

//create binary tree

// var tree = BinaryTree(6)
// tree.insert(3)
// tree.insert(2)
// tree.insert(5)
// tree.insert(9)

// tree

const hasPathToSum = function(node, targetSum) {
  // your code here
  var newTarget;
  if (node.value === targetSum) {
    return true;
  } 
  if (node.value < targetSum) {
    newTarget = targetSum - node.value;
    if (node.left !== null) {
      hasPathToSum(node.left, newTarget);  
    }
    if (node.right !== null) {
      hasPathToSum(node.right, newTarget);
    }
  } else if (node.value > targetSum) {
    return false;
  }
  return false;
};


