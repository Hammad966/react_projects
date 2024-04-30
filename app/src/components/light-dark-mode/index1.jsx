import useLocalStorage from "./useLocalStorage";
import "./theme.css";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>
          {theme === "light" ? (
            <span class="material-symbols-outlined text-5xl transition-[span] duration-300">dark_mode</span>
          ) : (
            <span class="material-symbols-outlined text-5xl transition-[span] duration-300">light_mode</span>
          )}
        </button>
      </div>
    </div>
  );
}
