function toggleDarkMode(darkModeOn) {
  if (darkModeOn) {
    document.documentElement.classList.remove('dark');
    background.src = 'img/light-mode.jpg';
    icon.src = 'img/fran_logo_light.png';
  } else {
    document.documentElement.classList.add('dark');
    background.src = 'img/dark-mode.jpg';
    icon.src = 'img/fran_logo_dark.png';
  }
}

const darkModeButton = document.querySelector('#toggleDarkMode');
let background = document.querySelector('#hero');
let icon = document.querySelector('#logo');

let darkModeEnabled = true;

darkModeButton.addEventListener('click', () => {
  toggleDarkMode(darkModeEnabled);
  darkModeEnabled = !darkModeEnabled;
});
