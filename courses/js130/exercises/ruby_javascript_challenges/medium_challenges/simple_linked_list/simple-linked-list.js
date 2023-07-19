class Element {
  constructor (data = null, nextNode = null) {
    this.data = data;
    this.nextNode = nextNode;
  }

  datum() { return this.data }

  isTail() { return !this.nextNode }

  next() { return this.nextNode }
}

class SimpleLinkedList {
  constructor () {
    this.length = 0;
    this.headNode = null;
  }

  size() { return this.length }

  isEmpty() { return this.length === 0 }

  _getTailNode() {
    let curNode = this.head();
    while (curNode.next()) {
      curNode = curNode.next();
    }
    return curNode;
  }

  push(data) {
    const element = new Element(data);
    if (this.head()) element.nextNode = this.headNode;
    this.headNode = element;
    this.length += 1;
  }

  peek() { return this.headNode ? this.headNode.datum() : null }

  head() { return this.headNode }

  pop() {
    let poppedNode = this.head();
    if (this.head()) this.headNode = this.head().next();
    this.length -= 1;
    return poppedNode ? poppedNode.datum() : null;
  }

  toArray() {
    let listArray = [];
    let cur = this.head();
    while (cur) {
      listArray.push(cur.datum());
      cur = cur.next();
    }
    return listArray;
  }

  reverse() {
    let prev = null;
    let cur = this.head();
    let next = this.head().next();

    while (cur) {
      cur.nextNode = prev;
      prev = cur;
      cur = next;
      next = cur ? cur.next() : null;
      if (!cur) this.headNode = prev;
    }
    return this;
  }

  static fromArray(array) {
    array = array ?? [];
    const list = new SimpleLinkedList();
    for (let idx = array.length - 1; idx >= 0; idx -= 1) list.push(array[idx]);
    return list;
  }
}


module.exports = { SimpleLinkedList, Element };
