import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

type Theme = 'light' | 'dark';

export const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
  }, [theme]);

  return [theme, toggleTheme];
};