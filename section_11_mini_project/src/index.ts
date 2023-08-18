const btn = document.querySelector('.js-btn') as HTMLButtonElement;
const input = document.querySelector('.js-todo-input') as HTMLInputElement;
const form = document.querySelector('.js-todo-form') as HTMLFormElement;
const list = document.querySelector('.js-todo-list') as HTMLUListElement;

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  // Make new list item
  const newTodoText = input?.value;
  const newListItem = document.createElement('li');
  newListItem.append(newTodoText);
  list?.append(newListItem);

  // Make checkbox for list item
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  newListItem.append(checkbox);

  // Clear form input
  input && (input.value = '');
});
