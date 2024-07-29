class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  addEleAtStartNode(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  addEleAtEndNode(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let prev = this.head;
      while (prev.next !== null) {
        prev = prev.next;
      }
      prev.next = newNode;
    }
    this.size++;
  }

  addNodeAtIndexLevel(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      this.addEleAtStartNode(value);
    } else {
      let newNode = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      newNode.next = prev.next;
      prev.next = newNode;
      this.size++;
    }
  }

  printLinkedList() {
    let curr = this.head;
    let listValue = "";
    while (curr !== null) {
      listValue += `${curr.value} `;
      curr = curr.next;
    }
    console.log("ListValues", listValue);
  }
}

let l1 = new LinkedList();
console.log("Before List Creation", l1.isEmpty());
console.log("Before List Creation Size", l1.getSize());
// Start of end
l1.addEleAtStartNode(8);
l1.addEleAtStartNode(6);
l1.addEleAtStartNode(4);
l1.addEleAtStartNode(2);
l1.printLinkedList();
console.log("After List Creation", l1.isEmpty());
console.log("After List Creation Size", l1.getSize());
// End of node
l1.addEleAtEndNode(11);
l1.addEleAtEndNode(13);
l1.printLinkedList();

// Inserting at index level
l1.addNodeAtIndexLevel(3, 1);
l1.addNodeAtIndexLevel(5, 3);
l1.addNodeAtIndexLevel(1, 0);
l1.printLinkedList();

class CLinkedList {
  constructor() {
    let dummyNode = new Node(-1);
    this.head = dummyNode;
    this.tail = dummyNode;
  }

  addNode(node) {
    this.tail.next = node;
    this.tail = node;
  }
}

function partitionLinkedList(head, x) {}
console.log("partionLinkedList", partitionLinkedList([1, 2, 3, 4, 5], 3));

// Note: The provided code snippet attempts to call partitionLinkedList with an array, but the function expects a linked list node.
// To test this function, you would need to create a linked list from the array and then pass the head of the linked list to the function.
