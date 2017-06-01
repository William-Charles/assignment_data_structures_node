const Node = require("./node");

class LinkedList {
  constructor() {
    this.headNode = null;
    this.lastNode = null;
  }
  initialize(firstNode = null) {
    this.headNode = firstNode;
    this.lastNode = firstNode;
  }
  addFirstNode(data) {
    this.headNode = new Node(data, null);
    this.lastNode = this.headNode;
  }
  addNode(data) {
    if (!this.headNode) {
      this.addFirstNode(data);
    } else {
      const node = new Node(data, null);
      this.lastNode.next = node;
      this.lastNode = node;
    }
  }
  insertNode(data, index) {
    let counter = 0;
    let currentNode = this.headNode;
    let prevNode = null;

    while (counter < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      counter++;
    }
    const newNode = new Node(data, currentNode);
    prevNode.next = newNode;
  }
  removeNode(index) {
    let counter = 0;
    let currentNode = this.headNode;
    let prevNode = null;

    while (counter < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      counter++;
    }

    let nextNode = currentNode.next;
    currentNode.next = null;
    prevNode.next = nextNode;
  }

  findItem(item) {
    let counter = 0;
    let currentNode = this.headNode;

    while (currentNode && currentNode.data.word !== item) {
      currentNode = currentNode.next;
      counter++;
    }
    if (currentNode) {
      console.log("it took ", counter, "node traversals to reach ", item);
      return currentNode;
    }
    console.log(
      "it took ",
      counter,
      "node traversals and ",
      item,
      "was not found."
    );
    return null;
  }

  findNode(index) {
    let counter = 0;
    let currentNode = this.headNode;

    while (counter < index) {
      currentNode = currentNode.next;
    }
    console.log(counter);
    return currentNode;
  }
  //O(n)
  reverseList() {
    let originalHead = this.headNode;

    let newHead = originalHead;

    //newHead = b

    while (originalHead.next !== null) {
      let currentHead = newHead;
      newHead = originalHead.next;
      originalHead.next = newHead.next;
      newHead.next = currentHead;
    }
    this.headNode = newHead;
    this.lastNode = originalHead;
  }

  printList() {
    let currentNode = this.headNode;
    let array = [];
    while (currentNode !== null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return array;
  }
}

module.exports = LinkedList;

let list = new LinkedList();

list.addNode("a");
list.addNode("b");
list.addNode("c");
list.addNode("d");
list.addNode("e");

list.insertNode("frank", 2);
list.printList();
console.log("----------");

list.removeNode(2);
list.reverseList();
list.printList();
