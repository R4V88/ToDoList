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

// importing moment library to fomate Date;
import moment from 'moment';

const addForm = document.querySelector('.addForm--js');
const todoList = document.querySelector('.todo--js');
const listItems = todoList.getElementsByClassName('todo__item--js');
const search = document.querySelector('.navigation__input--js');
const goUpBtn = document.querySelector('.navigation__up--js');

addForm.addEventListener('submit', addItem);
todoList.addEventListener('click', removeItem);
search.addEventListener('keyup', searchItems);
goUpBtn.addEventListener('click', goToTop);

//Function to add item to the list
function addItem(e) {
  e.preventDefault();

  const item = createNewItem();
  todoList.appendChild(item);
}
//Creates new List Item
const createNewItem = () => {
  const createItem = document.createElement('li');
  createItem.classList.add('todo__item', 'todo__item--js');

  const createWrapper = createNewWrapper();
  const createContentAndCheckboxesWrapper = createNewContentAndCheckboxesWrapper();
  const createDate = createNewDate();

  createItem.appendChild(createWrapper);
  createItem.appendChild(createContentAndCheckboxesWrapper);
  createItem.appendChild(createDate);

  return createItem;
}
//Creates new Wrapper inside List Item
const createNewWrapper = () => {
  const createWrapper = document.createElement('div');
  createWrapper.classList.add('todo__wrapper', 'todo__wrapper--js');
  const createIndex = createNewIndex();
  const createTitle = createNewTitle();
  const createDeleteBtn = createNewDeleteBtn();

  createWrapper.appendChild(createIndex);
  createWrapper.appendChild(createTitle);
  createWrapper.appendChild(createDeleteBtn);

  return createWrapper;
}
//Creates new List Item index
const createNewIndex = () => {
  const createIndex = document.createElement('p');
  createIndex.classList.add('todo__index', 'todo__index--js');
  createIndex.appendChild(document.createTextNode(listItems.length + 1));
  return createIndex;
}
// Creates new List Item title
const createNewTitle = () => {
  const title = document.querySelector('.addForm__title--js').value;

  const createTitle = document.createElement('h1');
  createTitle.classList.add('todo__title', 'todo__title--js');
  createTitle.appendChild(document.createTextNode(title));
  return createTitle;
}
// Creates new delete button for the List item
const createNewDeleteBtn = () => {
  const createDeleteBtn = document.createElement('button');
  createDeleteBtn.classList.add('todo__deleteBtn', 'todo__deleteBtn--js');
  createDeleteBtn.appendChild(document.createTextNode('X'));
  return createDeleteBtn;
}
const createNewContentAndCheckboxesWrapper = () => {
  const createContentWithCheckboxes = document.createElement('div');

  const checkboxesWrapper = createCheckboxesWrapper();
  const createContent = createNewContent();

  createContentWithCheckboxes.classList.add('todo__contentCheckboxWrapper', 'todo__contentCheckboxWrapper--js');
  createContentWithCheckboxes.appendChild(createContent);
  createContentWithCheckboxes.appendChild(checkboxesWrapper);

  return createContentWithCheckboxes;
}
//Creates new Div with checkboxes
const createCheckboxesWrapper = () => {
  // const radioTodoLabel = document.querySelector('.todo__radioTodoLabel--js').value;
  // const radioDoneLabel = document.querySelector('.todo__radioDoneLabel--js').value;

  const createCheckBoxesWrapper = document.createElement('div');
  createCheckBoxesWrapper.classList.add('todo__checkboxesWrapper', 'todo__checkboxesWrapper--js');

  const createTodoCheckboxesParagraph = document.createElement('p');
  createTodoCheckboxesParagraph.classList.add('todo__todoCheckboxParagraph', 'todo__todoCheckboxParagraph--js');

  const createRadioTodoInput = document.createElement('input');
  createRadioTodoInput.classList.add('todo__radioTodoInput', 'todo__radioTodoInput--js');
  createRadioTodoInput.setAttribute('type', 'radio');
  createRadioTodoInput.setAttribute('name', 'checklist');
  const createRadioTodoLabel = document.createElement('label');
  createRadioTodoLabel.classList.add('todo__radioTodoLabel', 'todo__radioTodoLabel--js');

  const createDoneCheckboxParagraph = document.createElement('p');
  createDoneCheckboxParagraph.classList.add('todo__doneCheckboxParagraph', 'todo__doneCheckboxParagraph--js');
  const createRadioDoneInput = document.createElement('input');
  createRadioDoneInput.classList.add('todo__radioDoneInput', 'todo__radioDoneInput--js');
  createRadioDoneInput.setAttribute('type', 'radio');
  createRadioDoneInput.setAttribute('name', 'checklist');
  const createRadioDoneLabel = document.createElement('label');
  createRadioDoneLabel.classList.add('todo__radioDoneLabel', 'todo__radioDoneLabel--js');

  createRadioTodoLabel.appendChild(document.createTextNode('ToDO'));
  createTodoCheckboxesParagraph.appendChild(createRadioTodoInput);
  createTodoCheckboxesParagraph.appendChild(createRadioTodoLabel);

  createRadioDoneLabel.appendChild(document.createTextNode('Gotowe!'));
  createDoneCheckboxParagraph.appendChild(createRadioDoneInput);
  createDoneCheckboxParagraph.appendChild(createRadioDoneLabel);
  
  createCheckBoxesWrapper.appendChild(createTodoCheckboxesParagraph);
  createCheckBoxesWrapper.appendChild(createDoneCheckboxParagraph);

  return createCheckBoxesWrapper;
}
//Creates new paragraph inside List Item
const createNewContent = () => {
  const content = document.querySelector('.addForm__content--js').value;

  const createContent = document.createElement('p');
  createContent.classList.add('todo__content', 'todo__content--js');
  createContent.appendChild(document.createTextNode(content));
  return createContent;
}
//Creates new time stamp in List Item
const createNewDate = () => {
  const date = new Date();
  const formatedDate = moment(date).format('L');
  const createDate = document.createElement('p');
  createDate.classList.add('todo__date', 'todo__date--js');
  createDate.appendChild(document.createTextNode(formatedDate));
  return createDate;
}
//Deletes chosen List Item
function removeItem(e) {
  if (e.target.classList.contains('todo__deleteBtn--js')) {
    if (confirm('Na pewno chcesz usunac ten element?')) {
      const element = e.target.parentElement.parentElement;
      todoList.removeChild(element);
    }
  }
}
//Searches chosen title
function searchItems(e) {
  const text = e.target.value.toLowerCase();
  Array.from(listItems).forEach((item) => {
    const itemTitle = item.firstElementChild.firstElementChild.nextElementSibling.textContent;
    if (itemTitle.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
}
//Goes to top of the page
function goToTop(e) {
  if (e.target.classList.contains('navigation__up--js')) {
    document.documentElement.scrollTop = 0;
  }
}
