class Stack {
  constructor() {
    this.items = [];
  }

  Push(element) {
    return this.items.push(element);
  }

  Pop() {
    if (this.items.length === 0) {
      return "No Items in the list";
    } else {
      this.items.pop();
    }
  }

  Peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i];
    }
    return str;
  }
}

let newStack = new Stack();
newStack.Push(1);
newStack.Push(2);
newStack.Push(3);
newStack.Push(4);
newStack.Push(5);
console.log(newStack.items);
newStack.Pop()
console.log(newStack.items);
// console.log(newStack.Peek());
// console.log(newStack.isEmpty());
// console.log(newStack.printStack())
