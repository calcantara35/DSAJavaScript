class Item {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  // top node
  peek() {
    if (this.isEmpty()) {
      return "The stack is empty. Please push an element to the stack";
    }
    return this.top;
  }
  // add node to top of stack
  push(value) {
    const newNode = new Item(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return `${newNode.value} was added to the Stack as Top Node`;
  }
  // remove from top of stack
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const topNode = this.top;
    this.top = this.top.next;
    this.length--;
    return topNode;
  }
  // checks if stack is empty
  isEmpty() {
    return true ? this.length === 0 : this.length >= 1;
  }
}

const myStack = new Stack();
console.log(myStack.push("google.com"));
console.log(myStack.push("udemy.com"));
console.log(myStack.push("youtube.com"));
console.log(myStack.peek());
console.log(myStack);
console.log("----------------------");
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack);
