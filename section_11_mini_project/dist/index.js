"use strict";
const btn = document.querySelector('.js-btn');
const input = document.querySelector('.js-todo-input');
const form = document.querySelector('.js-todo-form');
const list = document.querySelector('.js-todo-list');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Make new list item
    const newTodoText = input === null || input === void 0 ? void 0 : input.value;
    const newListItem = document.createElement('li');
    newListItem.append(newTodoText);
    list === null || list === void 0 ? void 0 : list.append(newListItem);
    // Make checkbox for list item
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newListItem.append(checkbox);
    // Clear form input
    input && (input.value = '');
});
