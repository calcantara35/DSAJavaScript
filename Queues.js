class Item {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  // first node
  peek() {
    if (this.isEmpty()) {
      return "The stack is empty. Please push an element to the stack";
    }
    return this.first;
  }
  // add item to first of Queue
  enqueue(value) {
    const newItem = new Item(value);
    if (this.isEmpty()) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    this.length++;
    return this;
  }
  // remove from first of Queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return holdingPointer;
  }
  // checks if stack is empty
  isEmpty() {
    return true ? this.length === 0 : this.length >= 1;
  }
}

const myQueue = new Queue();
console.log(myQueue.enqueue("Joy"));
console.log(myQueue.enqueue("Matt"));
console.log(myQueue.enqueue("Pavel"));
console.log(myQueue.enqueue("Samir"));
console.log("----------------------");
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue);
