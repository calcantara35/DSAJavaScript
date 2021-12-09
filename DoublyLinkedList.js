class Node {
  constructor(value) {
    this.value = value;
    this.pre = null;
    this.next = null;
  }
}

class LinkedList {
  // creating the very first linked list node
  constructor(value) {
    this.head = new Node(value);
    // only have one item, so head is also the tail.
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.pre = this.tail;
    this.tail.next = newNode;
    // at this time, tail.next is still the last existing node
    this.tail = newNode;
    // at this point, we change the tail to equal the new node since
    // the pointers are aligned correctly
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.pre = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array.join("<-->");
  }

  insert(index, value) {
    // check params
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    // new node
    const newNode = new Node(value);
    // access to node before index we want to insert
    let nodeBeforeTarget = this.traverseToIndex(index - 1);
    // node after the nodeBeforeTarget
    let afterNode = nodeBeforeTarget.next;
    // nodeBeforeTarget's next value will be newNode
    nodeBeforeTarget.next = newNode;
    // newNode's pre will be nodeBeforeTarget's index
    newNode.pre = nodeBeforeTarget;
    // newNode.next will be the node that was after nodeBeforeTarget
    newNode.next = afterNode;
    // afterNode's pre will be the newNode inserted at given index
    afterNode.pre = newNode;
    this.length++;
  }

  remove(index) {
    if (index > this.length) {
      return `${index} is out of range. Linked list is ${this.length} long.`;
    }
    if (index === 0) {
      let currentNode = this.head;
      let nextNode = currentNode.next;
      this.head = nextNode;
      return this.printList();
    }
    let preNode = this.traverseToIndex(index - 1);
    let nodeToRemove = preNode.next;
    let afterNode = nodeToRemove.next;
    preNode.next = afterNode;
    afterNode.pre = preNode;
    this.length--;
    console.log(this.printList());
    return this.printList();
  }

  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
console.log(myLinkedList);
myLinkedList.prepend(1);
console.log(myLinkedList);
console.log(myLinkedList.printList());
myLinkedList.insert(2, 4);
console.log(myLinkedList.printList());
myLinkedList.remove(1);
console.log(myLinkedList.remove(0));
