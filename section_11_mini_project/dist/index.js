"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todo-input');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
    alert(input === null || input === void 0 ? void 0 : input.value);
});
