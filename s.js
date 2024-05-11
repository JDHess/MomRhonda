const openBtn = document.querySelector(".open-me");

const insideLeft = document.querySelector(".card__panel--inside-left");

openBtn.onclick = function () {
  document.body.classList.toggle("open");
  insideLeft.classList.toggle("shadow-me");
};