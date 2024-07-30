function inOrder(root, arr) {
  if (root === null) {
    return null;
  }

  inOrder(root.left, arr);

  arr.push(root.val);

  inOrder(root.right, arr);
}

function inOrderTraversal(root) {
  let arr = [];
  inOrder(root, arr);

  return arr;
}

let maxDiamter = 0;

function height(root) {
  if (root === null) {
    return 0;
  }

  let lht = height(root.left);
  let rht = height(root.right);

  maxDiamter = Math.max(maxDiamter, lht + rht + 1);

  let hght = Math.max(lht, rht) + 1;

  return hght;
}

function diameter(root) {
  maxDiamter = 0;

  height(root);
  return maxDiamter;
}

function rightView(root) {
  let q = new Queue();

  q.enqueue(root);

  let ans = [];

  while (q.length > 0) {
    let levelSize = q.length;

    for (let i = 0; i < levelSize; i++) {
      let currNode = q.dequeue();

      if (i === levelSize - 1) {
        ans.push(currNode.val);
      }

      if (currNode.left !== null) {
        q.enqueue(currNode.left);
      }

      if (currNode.right !== null) {
        q.enqueue(currNode.right);
      }
    }
  }
  return ans;
}
function Queue() {
  return null;
}
function topView(root) {
  let q = new Queue();

  q.enqueue([root, 0]);

  let minVL = 0;
  let hashMap = new Map();
  while (q.length > 0) {
    let arr = q.dequeue();
    let node = arr[0];
    let vl = arr[1];

    minVL = Math.min(minVL, vl);

    if (!hashMap.has(vl)) {
      hashMap.set(vl, node.val);
    }

    if (node.left !== null) {
      q.enqueue([node.left, vl - 1]);
    }
    if (node.right !== null) {
      q.enqueue([node.right, vl + 1]);
    }
  }
  let arr = [];
  for (let i = minVL; i < minVL + hashMap.size; i++) {
    arr.push(hashMap.get(i));
  }
  return arr;
}

function commonAncestor(root, p, q) {
  if ((root = null || root === p || root === q)) {
    return root;
  }

  let left = commonAncestor(root.left, p, q);
  let right = commonAncestor(root.right, p, q);

  if (left !== null && right !== null) {
    return root;
  }

  if (left !== null) {
    return left;
  }

  if (right !== null) {
    return right;
  }

  return null;
}

function constructBT(pSt, pEnd, inSt, inEnd, preOrder, inOrderMap) {
  if (pSt > pEnd || inSt > inEnd) {
    return null;
  }
  let rootVal = preOrder[pSt];
  let root = new TreeNode(rootVal);

  let rootIndex = inOrderMap.get(rootVal);
  let leftSize = rootIndex - inSt;

  root.left = constructBT(
    pSt + 1,
    pSt + leftSize,
    inSt,
    rootIndex - 1,
    preOrder,
    inOrderMap
  );

  root.right = constructBT(
    pSt + leftSize + 1,
    pEnd,
    rootIndex + 1,
    inEnd,
    preOrder,
    inOrderMap
  );

  return root;
}

function constructBTFrom(preOrder, inOrder) {
  let inOrderMap = new Map();

  for (let i = 0; i < inOrder.length; i++) {
    inOrderMap.set(inOrder[i], i);
  }

  let root = constructBT(
    0,
    preOrder.length - 1,
    0,
    inOrder.length - 1,
    preOrder,
    inOrder
  );
  return root;
}

function validateBST(root, min, max) {
  if (root === null) {
    return true;
  }

  if (root.val <= min || root.val >= min) {
    return false;
  }

  let isLeftBST = validateBST(root.left, min, root.val);

  let isRightBST = validateBST(root.right, root.val, max);

  return isLeftBST && isRightBST;
}

function validateBinarySearchTree(root) {
  return validateBST(root, Number.MIN_VALUE, Number.MAX_VALUE);
}

let remainingValue = 0;
let ans = 0;
function inOrders(root) {
  if (root === null) {
    return;
  }

  remainingValue--;
  inOrder(root.left);

  if (remainingValue == 0) {
    ans = root.val;
  }

  inOrder(root.right);
}

function kthSmallElement(root, k) {
  remainingValue = k;
  ans = -1;

  inOrder(root);
  return ans;
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function collectLeafNodes(node, result) {
  if (node === null) return;
  if (node.left === null && node.right === null) {
    result.push(node.value);
    return;
  }
  collectLeafNodes(node.left, result);
  collectLeafNodes(node.right, result);
}

function collectLeftEdgeNodes(node, result) {
  if (node === null) return;
  if (node.left === null && node.right === null) {
    return;
  }
  result.push(node.value);
  if (node.left === null) {
    collectLeftEdgeNodes(node.right, result);
  } else {
    collectLeftEdgeNodes(node.left, result);
  }
}

function collectRightBottomUp(node, result) {
  if (node === null) return;
  if (node.left === null && node.right === null) return;

  if (node.right !== null) {
    collectRightBottomUp(node.right, result);
  } else if (node.left !== null) {
    collectRightBottomUp(node.left, result);
  }
  result.push(node.value);
}

function boundaryLevelTraversal(node) {
  if (node === null) return [];

  const result = [];
  result.push(node.value);

  collectLeftEdgeNodes(node.left, result);
  collectLeafNodes(node, result);
  collectRightBottomUp(node.right, result);

  return result;
}

function lowestCommonAncestorInBST(root, p, q) {
  if (!root || root === p || root === q) {
    return root;
  }

  let leftLCA = lowestCommonAncestorInBST(root.left, p, q);
  let rightLCA = lowestCommonAncestorInBST(root.right, p, q);

  if (leftLCA && rightLCA) {
    return root;
  }

  return leftLCA || rightLCA;
}

function insertBST(root, data) {
  if (root == null) {
    return new TreeNode(data);
  } else {
    var temp = null;

    if (data <= root.data) {
      temp = insertBST(root.left, data);
      root.left = temp;
      temp.parent = root;
    } else {
      temp = insertBST(root.right, data);
      root.right = temp;
      temp.parent = root;
    }

    return root;
  }
}

function inOrderSuccessor(root, givenNode, minValue, n) {
  if (givenNode.right != null) {
    return minValue(n.right);
  }

  // step 2 of the above algorithm
  var p = givenNode.parent;
  while (p != null && givenNode == p.right) {
    givenNode = p;
    p = p.parent;
  }
  return p;
}

// class TreeNodes {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// function inOrderTraversal(root, result) {
//   if (root === null) return;
//   inOrderTraversal(root.left, result);
//   result.push(root.val);
//   inOrderTraversal(root.right, result);
// }

function sortedArrayToBST(arr) {
  if (arr.length === 0) return null;
  let mid = Math.floor(arr.length / 2);
  let root = new TreeNode(arr[mid]);
  root.left = sortedArrayToBST(arr.slice(0, mid));
  root.right = sortedArrayToBST(arr.slice(mid + 1));
  return root;
}

function buildOutputTreeFormat(root) {
  let nodes = [];
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    if (node) {
      nodes.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  let n = nodes.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    let l = nodes[2 * i + 1] || -1;
    let r = nodes[2 * i + 2] || -1;
    result.push([i + 1, l, r]);
  }
  return result;
}

function balanceBST(root) {
  let arr = [];
  inOrderTraversal(root, arr);

  arr.sort((a, b) => a - b);

  let balancedRoot = sortedArrayToBST(arr);

  let result = buildOutputTreeFormat(balancedRoot);

  return result;
}

function zigZagTraversal(root) {
  let ans = [];
  if (root == null) return ans;

  let q = [];
  q.push(root);
  let flag = false;

  while (q.length != 0) {
    let size = q.length;
    let level = [];
    for (let i = 0; i < size; i++) {
      let node = q.shift();
      level.push(node.data);
      if (node.left != null) q.push(node.left);
      if (node.right != null) q.push(node.right);
    }

    flag = !flag;
    if (flag == false) {
      level.reverse();
    }
    for (let i = 0; i < level.length; i++) {
      ans.push(level[i]);
    }
  }
  return ans;
}

function printZigZagTraversal(rootNode) {
  if (rootNode == null) {
    return;
  }

  let currentLevel = [];
  let nextLevel = [];
  currentLevel.push(rootNode);
  let leftToRight = true;

  while (currentLevel.length > 0) {
    let node = currentLevel.pop();
    if (leftToRight) {
      if (node.leftChild != null) {
        nextLevel.push(node.leftChild);
      }

      if (node.rightChild != null) {
        nextLevel.push(node.rightChild);
      }
    } else {
      if (node.rightChild != null) {
        nextLevel.push(node.rightChild);
      }

      if (node.leftChild != null) {
        nextLevel.push(node.leftChild);
      }
    }

    if (currentLevel.length == 0) {
      leftToRight = !leftToRight;
      let temp = currentLevel;
      currentLevel = nextLevel;
      nextLevel = temp;
    }
  }
}
