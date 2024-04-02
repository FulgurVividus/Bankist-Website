"use strict";

//# Elements Selection

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnSrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

//# Modal window

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

//# Button Scrolling

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

//# Page Naviagtion

//* Not a good solution
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

//* Better solution with event delegation
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching Strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//# Implementing tabbed component

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  // console.log(clicked);

  // Guard Clause
  if (!clicked) {
    return;
  }

  // Activate tab
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  // Activate content area
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//# Menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};
// Passing "arguments" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

//# Sticky Navigation

// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener("scroll", function () {
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// });

//# Sticky Navigation - Intersection Observer API

const navHeight = nav.getBoundingClientRect().height;

const stickyNavCallback = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const stickyNavOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const headerObserver = new IntersectionObserver(
  stickyNavCallback,
  stickyNavOptions
);
headerObserver.observe(header);

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

//! DOM Traversing
/*
const h1 = document.querySelector("h1");

// Going downwards: child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "darkgrey";

// Going upwards: parent
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";
h1.closest("h1").style.background = "var(--gradient-primary)";

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = "scale(0.8)";
  }
});
*/

//! Sticky Navigation - Intersection Observer API
/*
const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
*/
