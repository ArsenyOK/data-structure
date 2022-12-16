// Binary tree, List, Stack, Queue, Collection, Hash Table, Graph, Matrix

// 1) Stack

function Stack() {
  this.count = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    let item = this.storage[this.count];
    this.count--;
    delete this.storage[this.count];
    return item;
  };

  this.size = function () {
    return this.count;
  };
}

const stack = new Stack();
stack.push(5);
stack.push([2, 3, 4, 5]);
stack.push(1);
stack.push("Hello World!");

stack.pop();

console.log(stack.storage, "stack.storage"); // { 0: 5, 1: [[2, 3, 4, 5]], 2: 1 }
