'use strict';

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

//Od Tego miejsca

import moment from 'moment';

const addForm = document.querySelector('.addForm');
const todolist = document.querySelector('.todo');
const listitems = todolist.getElementsByClassName('todo__item');

addForm.addEventListener('submit', addItem);
todolist.addEventListener('click', removeItem);

function addItem(e) {
  e.preventDefault();

  const title = document.getElementById('addForm__title').value;
  const content = document.getElementById('addForm__content').value;

  const createItem = document.createElement('li');
  createItem.classList.add('todo__item');
  createItem.setAttribute('id', 'todo__item');

  const createWrapper = document.createElement('div');
  createWrapper.classList.add('todo__wrapper');

  const createIndex = document.createElement('p');
  createIndex.className = 'todo__index';
  createIndex.appendChild(document.createTextNode(listitems.length + 1));

  const createTitle = document.createElement('h1');
  createTitle.classList.add('todo__title');
  createTitle.appendChild(document.createTextNode(title));

  const createDeleteBtn = document.createElement('button');
  createDeleteBtn.classList.add('todo__deleteBtn');
  createDeleteBtn.appendChild(document.createTextNode('X'));

  const createContent = document.createElement('p');
  createContent.classList.add('todo__content');
  createContent.appendChild(document.createTextNode(content));

  const createDate = document.createElement('p');
  createDate.className = 'todo__date';
  createDate.appendChild(document.createTextNode(momentDate()));

  createWrapper.appendChild(createIndex);
  createWrapper.appendChild(createTitle);
  createWrapper.appendChild(createDeleteBtn);

  createItem.appendChild(createWrapper);
  createItem.appendChild(createContent);
  createItem.appendChild(createDate);

  todolist.appendChild(createItem);
}

function removeItem(e) {
  if (e.target.classList.contains('todo__deleteBtn')) {
    if (confirm('Na pewno chcesz usunac ten element?')) {
      const element = e.target.parentElement.parentElement;
      todolist.removeChild(element);
    }
  }
}

const momentDate = () => {
  const date = new Date();
  const formatedDate = moment(date).format('L');
  return formatedDate;
}
