import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type TTheme = "dark" | "light";

type TThemeContext = {
  theme: TTheme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<TThemeContext>({
  theme: "dark",
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // index.html adds the "light" class before first paint if it was saved
  const [theme, setTheme] = useState<TTheme>(() =>
    document.documentElement.classList.contains("light") ? "light" : "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage unavailable, ignore */
    }
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
