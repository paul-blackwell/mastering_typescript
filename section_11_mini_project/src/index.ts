interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.querySelector('.js-btn') as HTMLButtonElement;
const input = document.querySelector('.js-todo-input') as HTMLInputElement;
const form = document.querySelector('.js-todo-form') as HTMLFormElement;
const list = document.querySelector('.js-todo-list') as HTMLUListElement;

const readTodos = (): Todo[] => {
  const todosJSON = localStorage.getItem('todos');
  if (!todosJSON) return [];
  return JSON.parse(todosJSON);
};

const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

const createToDoElement = (todo: Todo) => {
  // Make new list item
  const newListItem = document.createElement('li');
  newListItem.append(todo.text);
  list?.append(newListItem);

  // Make checkbox for list item
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;

  checkbox.addEventListener('change', () => {
    todo.completed = checkbox.checked;
    saveTodos();
  })

  newListItem.append(checkbox);
};


const todos: Todo[] = readTodos();
todos.forEach(createToDoElement);

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  const newToDo: Todo = {
    text: input?.value,
    completed: false,
  };

  createToDoElement(newToDo);
  todos.push(newToDo);

  // Save to local storage
  saveTodos();

  // Clear form input
  input && (input.value = '');
});
