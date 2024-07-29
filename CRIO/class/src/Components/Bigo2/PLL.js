class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function deleteKthToLast(head, k) {
  // Create a dummy node which helps to handle edge cases like removing the head
  let dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;

  // Move the first pointer `k + 1` steps ahead
  for (let i = 0; i <= k; i++) {
    first = first.next;
  }

  // Move both pointers until the first pointer reaches the end
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  // Remove the Kth node from the end
  second.next = second.next.next;

  // Return the new head of the list
  return dummy.next;
}

// class ListNode {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

/**
 * @param {ListNode} head
 * @param {number} X
 * @return {ListNode}
 */
function partition(head, X) {
  // Create two dummy nodes for less and greater lists
  let lessHead = new ListNode(0);
  let greaterHead = new ListNode(0);

  let less = lessHead; // Pointer to build the less list
  let greater = greaterHead; // Pointer to build the greater list

  // Traverse the original list and partition nodes
  let current = head;
  while (current !== null) {
    if (current.val < X) {
      less.next = current;
      less = less.next;
    } else {
      greater.next = current;
      greater = greater.next;
    }
    current = current.next;
  }

  // End the greater list
  greater.next = null;

  // Connect less list to greater list
  less.next = greaterHead.next;

  // Return the start of the less list
  return lessHead.next;
}

// Helper functions to create and print linked list for testing
function createLinkedList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function printLinkedList(head) {
  let result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(" "));
}

// Sample Input Usage
const values = [3, 5, 8, 5, 10, 2, 1];
const x = 5;

const head = createLinkedList(values);
const newHead = partition(head, x);
printLinkedList(newHead); // Output: 3 2 1 5 5 8 10

// class ListNode {
//   constructor(val = 0, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode();
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1 !== null) {
    current.next = l1;
  } else if (l2 !== null) {
    current.next = l2;
  }

  return dummy.next;
}

function copyRandomList(head) {
  if (head === null) {
    return null;
  }

  let current = head;
  while (current !== null) {
    let copy = new ListNode(current.val);
    copy.next = current.next;
    current.next = copy;
    current = copy.next;
  }

  current = head;
  while (current !== null) {
    let copy = current.next;
    copy.random = current.random ? current.random.next : null;
    current = copy.next;
  }

  let dummy = new ListNode(0);
  let copyCurrent = dummy;
  current = head;
  while (current !== null) {
    let copy = current.next;
    copyCurrent.next = copy;
    copyCurrent = copy;
    current.next = copy.next;
    current = current.next;
  }

  return dummy.next;
}

function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
}

function arrayToList(arr) {
  let head = null;
  let tail = null;
  for (let num of arr) {
    let newNode = new ListNode(num);
    if (head === null) {
      head = newNode;
      tail = head;
    } else {
      tail.next = newNode;
      tail = tail.next;
    }
  }
  return head;
}

function listToArray(head) {
  let arr = [];
  let curr = head;
  while (curr !== null) {
    arr.push(curr.val);
    curr = curr.next;
  }
  return arr;
}

function addTwoNumbers(head1, head2) {
  head1 = reverseList(head1);
  head2 = reverseList(head2);

  let newNode = new ListNode(0);
  let curr = newNode;
  let sumCarry = 0;

  while (head1 || head2) {
    let sum = sumCarry;
    if (head1) {
      sum += head1.val;
      head1 = head1.next;
    }
    if (head2) {
      sum += head2.val;
      head2 = head2.next;
    }

    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    sumCarry = Math.floor(sum / 10);
  }

  if (sumCarry > 0) {
    curr.next = new ListNode(sumCarry);
  }

  return reverseList(newNode.next);
}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head1
 * @param {ListNode} head2
 * @return {ListNode}
 */
function listIntersectionPoint(head1, head2) {
  // Helper function to compute the length of a list
  function getLength(head) {
    let length = 0;
    let current = head;
    while (current !== null) {
      length++;
      current = current.next;
    }
    return length;
  }

  // Compute lengths of both lists
  let length1 = getLength(head1);
  let length2 = getLength(head2);

  // Align both lists to start from the same position
  let diff = Math.abs(length1 - length2);

  if (length1 > length2) {
    for (let i = 0; i < diff; i++) {
      head1 = head1.next;
    }
  } else {
    for (let i = 0; i < diff; i++) {
      head2 = head2.next;
    }
  }

  // Traverse both lists together to find the intersection point
  while (head1 !== null && head2 !== null) {
    if (head1 === head2) {
      return head1; // Intersection found
    }
    head1 = head1.next;
    head2 = head2.next;
  }

  return null; // No intersection
}

function detectAndRemoveCycle(head) {
  if (head === null) {
    return false;
  }

  let slow = head;
  let fast = head;
  let hasCycle = false;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      hasCycle = true;
      break;
    }
  }

  if (!hasCycle) {
    return false;
  }

  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  let cycleStart = slow;
  let current = cycleStart;
  while (current.next !== cycleStart) {
    current = current.next;
  }

  current.next = null;

  return true;
}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function sortList(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let middle = getMiddle(head);
  let nextOfMiddle = middle.next;

  middle.next = null;

  let left = sortList(head);
  let right = sortList(nextOfMiddle);

  return merge(left, right);
}

function getMiddle(head) {
  if (head === null) return head;

  let slow = head;
  let fast = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function merge(left, right) {
  let dummy = new ListNode(0);
  let current = dummy;

  while (left !== null && right !== null) {
    if (left.val <= right.val) {
      current.next = left;
      left = left.next;
    } else {
      current.next = right;
      right = right.next;
    }
    current = current.next;
  }

  if (left !== null) {
    current.next = left;
  } else {
    current.next = right;
  }

  return dummy.next;
}

// Helper function to create a linked list from an array
function createList(arr) {
  if (arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to print the linked list
function printList(head) {
  let result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result.join(" "));
}

// Example usage
const list1 = createList([4, 2, 1, 3]);
const sortedList1 = sortList(list1);
printList(sortedList1); // Expected output: 1 2 3 4

const list2 = createList([8, 20, 2, 9]);
const sortedList2 = sortList(list2);
printList(sortedList2);

function partition(head, x) {
  if (!head) return null;

  let lessHead = new ListNode(0);
  let equalHead = new ListNode(0);
  let greaterHead = new ListNode(0);

  let less = lessHead;
  let equal = equalHead;
  let greater = greaterHead;

  let curr = head;
  while (curr !== null) {
    if (curr.val < x) {
      less.next = curr;
      less = less.next;
    } else if (curr.val === x) {
      equal.next = curr;
      equal = equal.next;
    } else {
      greater.next = curr;
      greater = greater.next;
    }
    curr = curr.next;
  }

  greater.next = null;

  less.next = equalHead.next;
  equal.next = greaterHead.next;

  return lessHead.next;
}
