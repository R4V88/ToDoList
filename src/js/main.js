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
// importing moment library to fomate Date;
import moment from 'moment';

const addForm = document.querySelector('.addForm');
const todolist = document.querySelector('.todo');
const listitems = todolist.getElementsByClassName('todo__item');
const search = document.querySelector('.navigation__input');

addForm.addEventListener('submit', addItem);
todolist.addEventListener('click', removeItem);
search.addEventListener('keyup', searchItems);


//Function to add item to the list
function addItem(e) {
  e.preventDefault();

  // const title = document.getElementById('addForm__title').value;
  // const content = document.getElementById('addForm__content').value;

  // const createItem = document.createElement('li');
  // createItem.classList.add('todo__item');
  // createItem.setAttribute('id', 'todo__item');
  // createNewItem();

  // const createWrapper = document.createElement('div');
  // createWrapper.classList.add('todo__wrapper');
  // createNewWrapper();

  // const createIndex = document.createElement('p');
  // createIndex.className = 'todo__index';
  // createIndex.appendChild(document.createTextNode(listitems.length + 1));
  // createNewIndex();

  // const createTitle = document.createElement('h1');
  // createTitle.classList.add('todo__title');
  // createTitle.appendChild(document.createTextNode(title));
  // createNewTitle(title);

  // const createDeleteBtn = document.createElement('button');
  // createDeleteBtn.classList.add('todo__deleteBtn');
  // createDeleteBtn.appendChild(document.createTextNode('X'));
  // createNewDeleteBtn();

  // const createContent = document.createElement('p');
  // createContent.classList.add('todo__content');
  // createContent.appendChild(document.createTextNode(content));
  // createNewContent(content);

  // const createDate = document.createElement('p');
  // createDate.className = 'todo__date';
  // createDate.appendChild(document.createTextNode(momentDate()));
  // createNewDate(momentDate());

  // createWrapper.appendChild(createIndex);
  // createWrapper.appendChild(createTitle);
  // createWrapper.appendChild(createDeleteBtn);
  // createNewWrapper();

  // createItem.appendChild(createWrapper);
  // createItem.appendChild(createContent);
  // createItem.appendChild(createDate);
  // createNewItem();

  // todolist.appendChild(createItem);

  createNewLi(todolist);
}

const createNewLi = (todolist) => {
  const item = createNewItem();

  todolist.appendChild(item);

  return todolist;
}
const createNewItem = () => {
  const createItem = document.createElement('li');
  createItem.classList.add('todo__item');
  createItem.setAttribute('id', 'todo__item');

  const createWrapper = createNewWrapper();
  const createContent = createNewContent();
  const createDate = createNewDate();

  createItem.appendChild(createWrapper);
  createItem.appendChild(createContent);
  createItem.appendChild(createDate);

  return createItem;
}
const createNewWrapper = () => {
  const createWrapper = document.createElement('div');
  createWrapper.classList.add('todo__wrapper');
  const createIndex = createNewIndex();
  const createTitle = createNewTitle();
  const createDeleteBtn = createNewDeleteBtn();

  createWrapper.appendChild(createIndex);
  createWrapper.appendChild(createTitle);
  createWrapper.appendChild(createDeleteBtn);

  return createWrapper;

}
const createNewIndex = () => {
  const createIndex = document.createElement('p');
  createIndex.className = 'todo__index';
  createIndex.appendChild(document.createTextNode(listitems.length + 1));
  return createIndex;
}
const createNewTitle = () => {
  const title = document.getElementById('addForm__title').value;

  const createTitle = document.createElement('h1');
  createTitle.classList.add('todo__title');
  createTitle.appendChild(document.createTextNode(title));
  return createTitle;
}
const createNewDeleteBtn = () => {
  const createDeleteBtn = document.createElement('button');
  createDeleteBtn.classList.add('todo__deleteBtn');
  createDeleteBtn.appendChild(document.createTextNode('X'));
  return createDeleteBtn;
}
const createNewContent = () => {
  const content = document.getElementById('addForm__content').value;

  const createContent = document.createElement('p');
  createContent.classList.add('todo__content');
  createContent.appendChild(document.createTextNode(content));
  return createContent;
}
const createNewDate = () => {
  const date = new Date();
  const formatedDate = moment(date).format('L');
  const createDate = document.createElement('p');
  createDate.className = 'todo__date';
  createDate.appendChild(document.createTextNode(formatedDate));
  return createDate;
}
// const momentDate = function(){
//   const date = new Date();
//   const formatedDate = moment(date).format('L');
//   return formatedDate;
// }
function removeItem(e) {
  if (e.target.classList.contains('todo__deleteBtn')) {
    if (confirm('Na pewno chcesz usunac ten element?')) {
      const element = e.target.parentElement.parentElement;
      todolist.removeChild(element);
    }
  }
}
function searchItems (e) {
  const text = e.target.value.toLowerCase;
  const items = listitems;
  Array.from(items).forEach((item) => {
    const itemTitle = item.firstElementChild.firstElementChild.nextElementSibling.textContent;
    if(itemTitle.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
}

