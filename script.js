"use strict";

//# Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(function (btn) {
  btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//# Scroll affect
const btnSrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnSrollTo.addEventListener("click", function (e) {
  const s1coordinates = section1.getBoundingClientRect();
  // console.log(s1coordinates);

  //* Scrolling
  // window.scrollTo({ // old school
  //   left: s1coordinates.left + window.pageXOffset,
  //   top: s1coordinates.top + window.pageYOffset,
  //   behavior: "smooth",
  // });
  section1.scrollIntoView({ behavior: "smooth" }); // new school
});

//! Lectures

//! Selecting, Creating and Deleting
/*
//# Select Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const allBtns = document.getElementsByTagName("button");
console.log(allBtns);

console.log(document.getElementsByClassName("btn"));

//# Creating and Inserting Elements
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = `We use cookies for improving functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>`;

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

//# Delete Elements
document
  .querySelector(".btn--close--cookie")
  .addEventListener("click", function () {
    message.remove();
    // message.parentElement.removeChild(message);
  });
*/

//! Styles, Attributes and Classes
/*
//# Styles
message.style.backgroundColor = "#37383d";
message.style.width = "100vw";
document.body.style.overflowX = "hidden";

// console.log(getComputedStyle(message));

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

//# Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.className);

logo.alt = `Minimalistic beautiful logo`;

// non-standard
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Bankist");

// src
console.log(logo.src);
console.log(logo.getAttribute("src"));

// links
const link = document.querySelector(".twitter-link");
console.log(link.href);
console.log(link.getAttribute("href"));

//# Data Attributes
console.log(logo.dataset.versionNumber);
*/

//! Types of Events and Event Handler
/*
const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert(`addEventListener: Great! You are reading the heading`);
};

h1.addEventListener("mouseenter", alertH1);

setTimeout(() => {
  h1.removeEventListener("mouseenter", alertH1);
}, 3000);

// h1.onmouseenter = function (e) {
//   // old school
//   alert(`addEventListener: Great! You are reading the heading`);
// };
*/

//! Event Propagation in Practice
/*
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomColor = () => {
  return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
    0,
    255
  )})`;
};

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`LINK`, e.target, e.currentTarget);

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`CONTAINER`, e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`NAV`, e.target, e.currentTarget);
});
*/

console.log(`testing issue`);
