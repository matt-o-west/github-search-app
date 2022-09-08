import { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => { 
        setTheme((curr) => curr === "light" ? "dark" : "light");
      }

    const value = {
        theme: theme,
        toggleTheme: toggleTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };