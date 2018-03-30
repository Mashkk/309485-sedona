//Тогл модального окна
var Link = document.querySelector(".hotels-search-button");
var Popup = document.querySelector(".modal-wrapper");
var Checkin = document.querySelector("#check-in-date");

Link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (Popup.classList.contains("modal__is-active")) {
    Popup.classList.remove("modal-error");
  }
  Popup.classList.toggle("modal__is-active");
  Checkin.focus();
});

//Валидация формы 
var Form = Popup.querySelector("form");
var Checkoff = document.querySelector("#check-off-date");

Form.addEventListener("submit", function (evt) {
  if (!Checkin.value || !Checkoff.value) {
    evt.preventDefault();
    Popup.classList.remove("modal-error");
    Popup.offsetWidth = Popup.offsetWidth;
    Popup.classList.add("modal-error");
  }
});