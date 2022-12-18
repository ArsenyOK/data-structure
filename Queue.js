// enqueue: enter to the queue, add an element to the end
// dequeue: leave the queue, remove the first element and return it
// front | peek: get the first element
// isEmpty: check, is the queue empty?
// length: get the quantity of the queue

class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}

const q = new Queue();
console.log(q.isEmpty);
console.log(q.length);

q.enqueue("hello");
q.enqueue({ a: 1, b: 2 });
q.enqueue(900);
console.log(q.elements, "q.elements");
console.log(q.length);
console.log(q.peek());
q.dequeue();
console.log(`${q.tail} -  ${q.head}`, "length of Queue");
