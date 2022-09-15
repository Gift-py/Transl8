const darkMode = document.querySelector(".dark-mode");
const lightMode = document.querySelector(".light-mode");
const root = document.querySelector(":root");

function switchIcon() {
  lightMode.classList.toggle("hide");
  darkMode.classList.toggle("hide");
}

darkMode.addEventListener("click", function (event) {
  event.preventDefault();

  switchIcon();
  root.style.setProperty("--white", "#121212");
  root.style.setProperty("--black", "#fff");
});

lightMode.addEventListener("click", function (event) {
  event.preventDefault();

  switchIcon();
  root.style.setProperty("--white", "#fff");
  root.style.setProperty("--black", "#121212");
});
