class Queue {
  constructor() {
    this.array = [];
  }
  enqueue(item) {
    this.array[this.array.length] = item;
    return item;
  }

  dequeue() {
    let i = 0;
    while (i < this.array.length && this.array[i] === null) {
      i++;
    }
    if (i === this.array.length) {
      return null;
    }
    let answer = this.array[i];
    this.array[i] = null;
    return answer;
  }
  peak() {
    let i = 0;
    while (i < this.array.length && this.array[i] === null) {
      i++;
    }
    if (i === this.array.length) {
      return null;
    }
    let answer = this.array[i];
    return answer;
  }
  empty() {
    let i = 0;
    while (i < this.array.length && this.array[i] === null) {
      i++;
    }
    if (i === this.array.length) {
      return true;
    }
    return false;
  }
}

let q = new Queue();
console.log(q.empty());
console.log(q.peak());
q.enqueue("1");
q.enqueue("2");
q.enqueue("3");
q.enqueue("4");
console.log(q.empty());
console.log(q.peak());
let a = q.dequeue();
let b = q.dequeue();
let c = q.dequeue();
let d = q.dequeue();
console.log(q.empty());

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(q);
