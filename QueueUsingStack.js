var MyQueue = function () {
  this.first = [];
  this.last = [];
  this.front = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  if (this.first.length === 0) {
    this.front = x;
  }
  this.first.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.last.length === 0) {
    while (this.first.length != 0) {
      this.last.push(this.first.pop());
    }
  }
  return this.last.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.last.length == 0 ? this.front : this.last[this.last.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.first.length == 0 && this.last.length == 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
