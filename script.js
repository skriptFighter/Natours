"use strict";

const menu = document.querySelector(".navigation__icon--menu");
const close = document.querySelector(".navigation__icon--close");

const btn = document.querySelector(".navigation__btn");

btn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  close.classList.toggle("hidden");
});
