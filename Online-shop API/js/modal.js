let btn = document.querySelector("button.btn-login1");
let btn2 = document.querySelector("button.btn-login2");
let modal = document.querySelector("div.modal");
let close = document.querySelector("div.close");
btn.addEventListener("click", function () {
  modal.classList.add("show");
  modal.classList.add("fadeIn");
});
btn2.addEventListener("click", function () {
  modal.classList.add("show");
  modal.classList.add("fadeIn");
});
close.addEventListener("click", function () {
  modal.classList.remove("fadeIn");

  setTimeout(() => {
    modal.classList.remove("show");
  }, 500);
  modal.classList.add("fadeOut");

  modal.classList.remove("fadeOut");
});
