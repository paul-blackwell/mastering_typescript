"use strict";
const btn = document.querySelector('.js-btn');
const input = document.querySelector('.js-todo-input');
const form = document.querySelector('.js-todo-form');
const list = document.querySelector('.js-todo-list');
const readTodos = () => {
    const todosJSON = localStorage.getItem('todos');
    if (!todosJSON)
        return [];
    return JSON.parse(todosJSON);
};
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};
const createToDoElement = (todo) => {
    // Make new list item
    const newListItem = document.createElement('li');
    newListItem.append(todo.text);
    list === null || list === void 0 ? void 0 : list.append(newListItem);
    // Make checkbox for list item
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newListItem.append(checkbox);
};
const todos = readTodos();
todos.forEach(createToDoElement);
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newToDo = {
        text: input === null || input === void 0 ? void 0 : input.value,
        completed: false,
    };
    createToDoElement(newToDo);
    todos.push(newToDo);
    // Save to local storage
    saveTodos();
    // Clear form input
    input && (input.value = '');
});
