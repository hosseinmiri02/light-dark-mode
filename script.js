const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

const DARK_THEME = "dark";
const LIGHT_THEME = "light";

// Dark of Light Images
const imageMode = function (color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
};

const toggleDarkLightMode = function (color) {
  nav.style.backgroundColor =
    color === LIGHT_THEME ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";

  textBox.style.backgroundColor =
    color === LIGHT_THEME ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";

  toggleIcon.children[0].textContent =
    color === LIGHT_THEME ? "Light Mode" : "Dark Mode";

  color === LIGHT_THEME
    ? toggleIcon.children[1].classList.replace("fa-moon", "fa-sun")
    : toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");

  color === LIGHT_THEME ? imageMode(LIGHT_THEME) : imageMode(DARK_THEME);
};

// Switch Theme Dynamically
const switchTheme = function (e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", DARK_THEME);
    localStorage.setItem("theme", DARK_THEME);
    toggleDarkLightMode(DARK_THEME);
  } else {
    document.documentElement.setAttribute("data-theme", LIGHT_THEME);
    localStorage.setItem("theme", LIGHT_THEME);
    toggleDarkLightMode(LIGHT_THEME);
  }
};

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === DARK_THEME) {
    toggleSwitch.checked = true;
    toggleDarkLightMode(DARK_THEME);
  }
}
