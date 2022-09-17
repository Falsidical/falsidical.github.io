const darkModeButton = document.querySelector('#toggleDarkMode');
const background = document.querySelector('#hero');
const icon = document.querySelector('#logo');
const project1Image = document.querySelector('#project1');

function setDarkMode(darkModeValue) {
  let mode;
  if (darkModeValue) {
    localStorage.darkMode = 'enabled';
    mode = 'dark';
    document.documentElement.classList.add('dark');
    darkModeButton.textContent = '☀️';
  } else {
    localStorage.darkMode = 'disabled';
    mode = 'light';
    document.documentElement.classList.remove('dark');
    darkModeButton.textContent = '🌙';
  }
  background.src = `img/${mode}-mode.jpg`;
  icon.src = `img/fran_logo_${mode}.png`;
  project1Image.src = `img/project-1-${mode}.png`;
}

let darkModeEnabled = localStorage.darkMode === 'enabled';
setDarkMode(darkModeEnabled);

darkModeButton.addEventListener('click', () => {
  darkModeEnabled = !darkModeEnabled;
  setDarkMode(darkModeEnabled);
});
