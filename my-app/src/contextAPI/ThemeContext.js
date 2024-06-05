// Theme context

import { createContext, useState } from "react";

// Provider / Consumer

const ThemeContext = createContext();


const ThemeProvider = ({children}) => {

    // Theme status
    const [theme, setTheme] = useState('light');
    
    // Theme Toggle
    const toggleTheme = () => {
        setTheme( theme == 'light' ? 'dark' : 'light' );
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );

}

export {ThemeProvider, ThemeContext};