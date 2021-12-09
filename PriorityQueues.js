class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  // an array is used to implement priority
  constructor() {
    this.items = [];
  }
  // enqueue -> add to the queue according to its priority
  enqueue(item, priority) {
    // creating object from queue element
    var qElement = new QElement(item, priority);
    var contain = false;

    // iterating through the enitre item array to add element at the correct
    // location of the queue
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        /// once the correct location is found, it is enqueued.
        // splice params (start, deleteCount, itemToBeInsertedAtStart)
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }

    // if the element has the highest priority
    // it is added at the end of the queue
    if (!contain) {
      this.items.push(qElement);
    }
  }

  // dequeue to remove element from queue
  dequeue() {
    // return the dequeued element and remove it. if the queue is empty returns underflow
    if (this.isEmpty()) {
      return "Underflow";
    }
    // removes and returns the elemement from the front of a queue as the highest priority element is stored
    // at the front of the priority queue. Shift method removes an element from the queue.
    return this.items.shift();
  }

  // front
  // returns the highest priority element in the priority queue without removing it
  front() {
    if (this.isEmpty()) {
      return "No Elements in Queue";
    }
    return this.items[0];
  }
  // returns the last element of the priority queue
  rear() {
    if (this.isEmpty()) {
      return "No Elements in queue";
    }
    return this.items[this.items.length - 1];
  }
  // returns true or false based on the queue length
  isEmpty() {
    return this.items.length === 0;
  }

  // printPriorityQueue
  printPriorityQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i].element + " ";
    }
    return str;
  }
}

// creating object for queue class
let priorityQueue = new PriorityQueue();

// testing isEmpty and front on an empty queue
// return true
console.log(priorityQueue.isEmpty());

// returns "No elements in Queue"
console.log(priorityQueue.front());

// adding elements to the queue
priorityQueue.enqueue("Sumit", 2);
priorityQueue.enqueue("Gourav", 1);
priorityQueue.enqueue("Piyush", 1);
priorityQueue.enqueue("Sunny", 2);
priorityQueue.enqueue("Sheru", 3);

// prints [Gourav Piyush Sumit Sunny Sheru]
console.log(priorityQueue.printPriorityQueue());

// prints Gourav
console.log("Front: ", priorityQueue.front().element);

// pritns Sheru
console.log("Rear: ", priorityQueue.rear().element);

// removes Gouurav
// priorityQueue contains
// [Piyush Sumit Sunny Sheru]
console.log(priorityQueue.dequeue().element);

// Adding another element to the queue
priorityQueue.enqueue("Sunil", 2);

// prints [Piyush Sumit Sunny Sunil Sheru]
console.log(priorityQueue.printPriorityQueue());
