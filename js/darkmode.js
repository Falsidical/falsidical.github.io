const darkModeButton = document.querySelector('#toggleDarkMode');
let background = document.querySelector('#hero');
let icon = document.querySelector('#logo');

function setDarkMode(darkModeValue) {
  if (darkModeValue) {
    localStorage.darkMode = 'enabled';
    document.documentElement.classList.add('dark');
    background.src = 'img/dark-mode.jpg';
    icon.src = 'img/fran_logo_dark.png';
    darkModeButton.textContent = '☀️';
  } else {
    localStorage.darkMode = 'disabled';
    document.documentElement.classList.remove('dark');
    background.src = 'img/light-mode.jpg';
    icon.src = 'img/fran_logo_light.png';
    darkModeButton.textContent = '🌙';
  }
}

let darkModeEnabled;
localStorage.darkMode === 'enabled' ? (darkModeEnabled = true) : (darkModeEnabled = false);
setDarkMode(darkModeEnabled);

darkModeButton.addEventListener('click', () => {
  darkModeEnabled = !darkModeEnabled;
  setDarkMode(darkModeEnabled);
});
