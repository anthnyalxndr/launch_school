const TodoList = require("./lib/todolist");
const Todo = require("./lib/todo");
const { sortTodoLists, sortTodos } = require("./lib/sort");

let l1 = new TodoList('l1');
let l2 = new TodoList('l2');
let allLists = [l1, l2];
allLists.forEach(list => list.add(new Todo('foo')))

console.log(sortTodoLists([]));
