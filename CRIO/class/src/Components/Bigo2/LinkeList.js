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

  isSize() {
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
        let newNode = new Node(value)

        if (this.head === null) {
            this.head = newNode
        } else {
            
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
console.log("Before List Creation Size", l1.isSize());
l1.addEleAtStartNode(2);
l1.addEleAtStartNode(4);
l1.addEleAtStartNode(6);
l1.addEleAtStartNode(8);
l1.printLinkedList();
console.log("After List Creation", l1.isEmpty());
console.log("After List Creation Size", l1.isSize());
