// ThemeToggle (dark, light)

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {

    const {toggleTheme} = useContext(ThemeContext);
    
    return (
        <button onClick={toggleTheme}>
            테마 토글
        </button>
    )
}

export default ThemeToggle;