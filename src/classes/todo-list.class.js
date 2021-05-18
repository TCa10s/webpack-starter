import { Todo } from './todo.class';

export class TodoList {
  constructor() {
    // this.todos = [];
    this.loadLocalStorage();
  }

  newTodo(task) {
    this.todos.push(task);
    this.saveLocalStorage();
  }

  deleteTodo(id) {
    id = parseInt(id);
    this.todos = this.todos.filter((task) => task.id !== id);
    this.saveLocalStorage();
  }

  markTodoCompleted(id) {
    id = parseInt(id);
    for (const task of this.todos) {
      if (task.id === id) {
        task.completed = !task.completed;
        this.saveLocalStorage();
        break;
      }
    }
  }

  deleteTodoCompleted() {
    this.todos = this.todos.filter((task) => !task.completed);
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  loadLocalStorage() {
    this.todos = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [];
    // this.todos = this.todos.map((task) => Todo.fromJSON(task));
    this.todos = this.todos.map(Todo.fromJSON);
  }
}
