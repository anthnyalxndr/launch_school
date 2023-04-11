// Link to exercise: https://launchschool.com/exercises/1becc424

class CircularQueue {
  constructor(size) {
    this.queue = Array(size).fill(null);
    this.lastIdx = 0;
    this.nextIdx = 0;
  }

  incrementIdx(...props) {
    props.forEach(prop => {
      if (this[prop] === this.queue.length - 1) this[prop] = 0;
      else this[prop] += 1;
    });
  }

  decrementIdx(...props) {
    [props].forEach(prop => {
      if (this[prop] === 0) this[prop] = this.queue.length - 1;
      else this[prop] -= 1;
    });
  }

  isFull() {
    return !this.queue.some(el => el === null);
  }

  isEmpty() {
    return this.queue.every(el => el === null);
  }

  enqueue(obj) {
    if (this.isFull()) {
      this.queue[this.lastIdx] = obj;
      this.incrementIdx('lastIdx', 'nextIdx');
    } else {
      this.queue[this.nextIdx] = obj;
      this.incrementIdx('nextIdx');
    }
  }

  dequeue() {
    if (this.isEmpty()) return null;
    else {
      let removedObj = this.queue[this.lastIdx];
      this.queue[this.lastIdx] = null;
      this.incrementIdx('lastIdx');
      return removedObj;
    }
  }
}

// eslint-disable-next-line max-lines-per-function, max-statements
function testCases() {
  let queue = new CircularQueue(3);
  console.log(queue.dequeue() === null);

  queue.enqueue(1);
  queue.enqueue(2);

  console.log(queue.dequeue() === 1);

  queue.enqueue(3);
  queue.enqueue(4);
  console.log(queue.dequeue() === 2);

  queue.enqueue(5);
  queue.enqueue(6);
  queue.enqueue(7);
  console.log(queue.dequeue() === 5);
  console.log(queue.dequeue() === 6);
  console.log(queue.dequeue() === 7);
  console.log(queue.dequeue() === null);

  let anotherQueue = new CircularQueue(4);
  console.log(anotherQueue.dequeue() === null);

  anotherQueue.enqueue(1);
  anotherQueue.enqueue(2);
  console.log(anotherQueue.dequeue() === 1);

  anotherQueue.enqueue(3);
  anotherQueue.enqueue(4);
  console.log(anotherQueue.dequeue() === 2);

  anotherQueue.enqueue(5);
  anotherQueue.enqueue(6);
  anotherQueue.enqueue(7);
  console.log(anotherQueue.dequeue() === 4);
  console.log(anotherQueue.dequeue() === 5);
  console.log(anotherQueue.dequeue() === 6);
  console.log(anotherQueue.dequeue() === 7);
  console.log(anotherQueue.dequeue() === null);
}

testCases();
