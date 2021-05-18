// import { TodoList } from './classes/todo-list.class';
// import { Todo } from './classes/todo.class';
import { Todo, TodoList } from './classes/'; // Buscara el index.js por defecto
import { createTodoHtml } from './js/components';
import { pendingTasks } from './js/components';
import './styles.css';

export const todoList = new TodoList();
pendingTasks();

// todoList.todos.forEach((task) => createTodoHtml(task));
todoList.todos.forEach(createTodoHtml);
