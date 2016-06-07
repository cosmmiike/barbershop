var formOpen = document.querySelector(".login");
var formPopup = document.querySelector(".modal-content");
var formClose = formPopup.querySelector(".modal-content-close");
var form = formPopup.querySelector("form");
var login = formPopup.querySelector("[name=login]");
var password = formPopup.querySelector("[name=password]");

var mapOpen = document.querySelector(".btn-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");
var overlay = document.querySelector(".modal-overlay");

var storage = localStorage.getItem("login");

formOpen.addEventListener("click", function (event) {
  event.preventDefault();
  formPopup.classList.add("modal-content-show");
  overlay.classList.add("modal-content-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

formClose.addEventListener("click", function (event) {
  event.preventDefault();
  formPopup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-content-show");
  formPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function (event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    formPopup.classList.remove("modal-error");
    formPopup.offsetWidth = formPopup.offsetWidth;
    formPopup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

mapOpen.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-show");
  overlay.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (formPopup.classList.contains("modal-content-show")) {
      formPopup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-content-show");
      formPopup.classList.remove("modal-error");
    }
    if (mapPopup.classList.contains("modal-content-show")) {
      mapPopup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-content-show");
    }
  }
});

overlay.addEventListener("click", function (event) {
  if (formPopup.classList.contains("modal-content-show")) {
    formPopup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-content-show");
    formPopup.classList.remove("modal-error");
  }
  if (mapPopup.classList.contains("modal-content-show")) {
    mapPopup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-content-show");
  }
});