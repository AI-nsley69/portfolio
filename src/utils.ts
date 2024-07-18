const darkMode = {
  primary: "#121212",
  secondary: "#121212",
  outline: "#242424",
  accent: "#121212",
  text: "#ffffff",
};

export function toggleDarkMode() {
  for (const [key, value] of Object.entries(darkMode)) {
    document.documentElement.style.setProperty(`--${key}`, value);
  }
}
