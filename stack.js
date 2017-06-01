class Stack {
  constructor() {
    this.array = [];
  }
  push(item) {
    this.array[this.array.length] = item;
    return this.array;
  }
  pop() {
    if (!this.array.length) {
      return null;
    }
    let i = this.array.length - 1;
    while (!this.array[i] && i >= 0) {
      i--;
    }
    if (i === -1) {
      return null;
    }
    const answer = this.array[i];
    this.array[i] = null;
    return answer;
  }
  peak() {
    if (!this.array.length) {
      return null;
    }
    let i = this.array.length - 1;
    while (!this.array[i] && i >= 0) {
      i--;
    }
    if (i === -1) {
      return null;
    }
    const answer = this.array[i];
    return answer;
  }
  empty() {
    if (!this.array.length) {
      return true;
    }
    let i = this.array.length - 1;
    while (!this.array[i] && i >= 0) {
      i--;
    }
    if (i === -1) {
      return true;
    }
    return false;
  }
}

let s = new Stack();

s.push("hello");
console.log(s.empty());

let peaked = s.peak();
let popped = s.pop();
console.log(s.empty());
console.log(peaked);
console.log(popped);

console.log(s);
