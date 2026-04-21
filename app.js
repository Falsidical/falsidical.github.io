const themes = {
  ocean: { accent: '#0e7fcf', accentDark: '#5db5f0' },
  forest: { accent: '#2a7a45', accentDark: '#5cbf7e' },
  ember: { accent: '#c94a1a', accentDark: '#f08060' },
};

function setTheme(name) {
  const t = themes[name];
  document.documentElement.style.setProperty('--color-accent', t.accent);
  localStorage.setItem('theme', name);
}

function toggleMode() {
  const html = document.documentElement;
  const isDark = html.dataset.theme === 'dark';
  html.dataset.theme = isDark ? 'light' : 'dark';
  localStorage.setItem('mode', html.dataset.theme);
}

const saved = localStorage.getItem('mode');
const prefersDark = matchMedia('(prefers-color-scheme:dark)').matches;
document.documentElement.dataset.theme = saved ?? (prefersDark ? 'dark' : 'light');
