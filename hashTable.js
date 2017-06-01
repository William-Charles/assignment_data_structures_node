const LinkedList = require("./LinkedList");
const { contents } = require("./fileReader");
class HashTable {
  constructor() {
    this.buckets = new Array(26);
  }

  hash(obj) {
    let str = obj.word.toLowerCase();
    var index = str.charCodeAt(0);
    return index % 26;
  }

  insert(obj) {
    let index = this.hash(obj);

    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedList();
    }
    this.buckets[index].addNode(obj);
  }

  define(str) {
    const index = this.hash(str);
    if (this.buckets[index]) {
      let obj = this.buckets[index].findItem(str.word);
      if (obj) {
        return obj.data.def;
      }
    }
    console.log("not found");
    return null;
  }

  renderList() {
    for (let i = 0; i < this.buckets.length; i++) {
      if (!this.buckets[i]) {
        console.log("position", i, "is", null);
      } else {
        console.log("position", i, "is", this.buckets[i].printList());
      }
    }
  }
}

let table = new HashTable();

for (let key in contents) {
  table.insert({
    def: contents[key],
    word: key
  });
}
let fail = table.define({ word: "12" });
let def = table.define({ word: "CHAJA" });
console.log(def);
