class Stack {
  constructor() {
    this.data = [];
  }
  // top node
  peek() {
    if (this.isEmpty()) {
      return "The stack is empty. Please push an element to the stack";
    }
    return this.data[this.data.length - 1];
  }
  // add node to top of stack
  push(value) {
    this.data.push(value);
    return this;
  }
  // remove from top of stack
  pop() {
    var itemRemoved = this.data.pop();
    return itemRemoved;
  }
  // checks if stack is empty
  isEmpty() {
    return true ? this.data.length === 0 : this.data.length >= 1;
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
