"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

let buttonAdd = document.querySelector('.newTodo');
let buttonUp = document.querySelector('.navigation__up');

buttonAdd.addEventListener('click', addItem);

function addItem(){
  let liLength = document.getElementById("#todo");
  console.log(liLength);
}


addItem();
