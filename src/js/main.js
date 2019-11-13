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

let addForm = document.querySelector('.addForm');
let todolist = document.querySelector('.todo');


addForm.addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();

  let title = document.getElementById('addForm__title').value;
  let content = document.getElementById('addForm__content').value;

  let createLi = document.createElement('li');
  createLi.classList.add('todo__item');
  
  let createDiv = document.createElement('div');
  createDiv.classList.add('todo__wrapper');

  let createH1 = document.createElement('h1');
  createH1.classList.add('todo__title');
  // createH1.appendChild(title);

  let createBtn = document.createElement('button');
  createBtn.classList.add('todo__delete');
  // createBtn.appendChild(document.createTextNode('X'));

  let createP = document.createElement('p');
  createP.classList.add('todo__content');
  // createP.appendChild(content);

  createLi.appendChild()

  console.log(createLi);
  console.log(createDiv);
  // console.log(createBtn);
  // console.log(createH1);
  // console.log(createP);
}


