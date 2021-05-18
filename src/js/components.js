import { Todo } from '../classes';
import { todoList } from '../index';

// Referencias al HTML
const divTodoList   = document.querySelector('.todo-list');
const textInput     = document.querySelector('.new-todo');
const btnDelete     = document.querySelector('.clear-completed');
const ulFilter      = document.querySelector('.filters');
const anchorFilter  = document.querySelectorAll('.filtro');
const todoCount     = document.querySelector('.todo-count');

export const createTodoHtml = (todo) => {
  const htmlTask = `<li class='${todo.completed ? 'completed' : ''}' data-id='${
    todo.id
  }'>
      <div class='view'>
        <input class='toggle' type='checkbox' ${
          todo.completed ? 'checked' : ''
        }>
        <label>${todo.task}</label>
        <button class='destroy'></button>
      </div>
      <input class='edit' value='Create a TodoMVC template'>
    </li>`;

  const div = document.createElement('div');
  div.innerHTML = htmlTask;

  // Realizamos el apppend del primer elemento hijo para evitar tener un div vacio.
  divTodoList.append(div.firstElementChild);

  return div.firstElementChild;
};

// EVENTS

textInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13 && textInput.value.length > 0) {
    const newTask = new Todo(textInput.value);
    todoList.newTodo(newTask);
    createTodoHtml(newTask);
    textInput.value = '';
    pendingTasks();
  }
});

divTodoList.addEventListener('click', (event) => {
  const nameElement = event.target.localName; // Input, label, button
  const taskElement = event.target.parentElement.parentElement; // Hacemos referencia al li para borrarlo.
  const taskId = taskElement.getAttribute('data-id'); // Id task

  if (nameElement.includes('input')) {// Click checkbox
    todoList.markTodoCompleted(taskId);
    taskElement.classList.toggle('completed');
    pendingTasks();
  } else if (nameElement.includes('button')) {// Delete task
    todoList.deleteTodo(taskId);
    divTodoList.removeChild(taskElement);
    pendingTasks();
  }
});

btnDelete.addEventListener('click', () => {
  todoList.deleteTodoCompleted();
  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    const element = divTodoList.children[i];
    if (element.classList.contains('completed')) {
      divTodoList.removeChild(element);
    }
  }
});

ulFilter.addEventListener('click', (event) => {
  const filter = event.target.text;

  // Reset de clase selected.
  anchorFilter.forEach((item) => item.classList.remove('selected'));
  event.target.classList.add('selected');

  if (!filter) return;
  for (const element of divTodoList.children) {
    // Reset de clase hidden.
    element.classList.remove('hidden');
    const completed = element.classList.contains('completed'); // Return true or false
    switch (filter) {
      case 'Pendientes':
        if (completed) element.classList.add('hidden');
        break;
      case 'Completados':
        if (!completed) element.classList.add('hidden');
        break;

      default:
        break;
    }
  }
});

// PENDING TASKS
export const pendingTasks = () => {
  const pendingTasks = todoList.todos.filter(item => item.completed === false);
  todoCount.firstElementChild.innerText = pendingTasks.length.toString();
}


