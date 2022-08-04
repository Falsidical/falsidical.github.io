const darkModeButton = document.querySelector('#toggleDarkMode');
let background = document.querySelector('#hero');
let icon = document.querySelector('#logo');
let project1Image = document.querySelector('#project1');

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

let darkModeEnabled;
localStorage.darkMode === 'enabled' ? (darkModeEnabled = true) : (darkModeEnabled = false);
setDarkMode(darkModeEnabled);

darkModeButton.addEventListener('click', () => {
  darkModeEnabled = !darkModeEnabled;
  setDarkMode(darkModeEnabled);
});
