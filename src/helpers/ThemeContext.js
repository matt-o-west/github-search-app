import { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
    const [theme, setTheme] = useState("dark");

    function toggleTheme() {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
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