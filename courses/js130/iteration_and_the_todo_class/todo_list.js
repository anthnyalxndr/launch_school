// This class represents a todo item and its associated
// data: the todo title and a flag that shows whether the
// todo item is done.

class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

class TodoList {
  constructor(title = 'TodoList', todos = []) {
    this.title = title;
    this.todos = todos;
  }

  add(todo) {
    if (!(todo instanceof Todo)) {
      throw new TypeError('can only add Todo objects');
    }
    this.todos.push(todo);
  }

  toString() {
    let header = `---- ${this.title} ----\n`;
    return header + this.todos.join('\n');
  }

  size() { return this.todos.length }

  first() { return this.todos[0] }

  last() { return this.todos[this.size() - 1] }

  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }

  _validateIndex(index) { // _ in name suggests a "private" method
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }

  markDoneAt(index) {
    this.itemAt(index).markDone();
  }

  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }

  isDone() {
    return this.todos.every(todo => todo.isDone());
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(index) {
    return this.todos.splice(this.itemAt(index), 1);
  }

  forEach(callback) {
    this.todos.forEach(callback);
  }

  filter(callback) {
    return new this.constructor(this.title, this.todos.filter(callback));
  }

  findByTitle(text) {
    return this.todos.find(({ title }) => title === text);
  }

  allDone() {
    return this.filter( todo => todo.isDone());
  }

  allNotDone() {
    return this.filter( todo => !todo.isDone());
  }

  markDoneByTitle(text) {
    let todo = this.findByTitle(text);
    if (todo) todo.markDone();
  }

  markAllDone() {
    this.forEach(todo => todo.markDone());
  }

  markAllUndone() {
    this.forEach(todo => todo.markUndone());
  }

  toArray() {
    return this.todos.slice();
  }

}

/*
// Variables to Use for Testing
let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");
let list = new TodoList("Today's Todos");
*/
