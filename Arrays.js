class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // Get
  get(index) {
    return this.data[index];
  }
}

const newArray = new MyArray();
console.log(newArray);
