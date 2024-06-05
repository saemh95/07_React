// Theme Component

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./css/style.css";
import ThemeChildComponent from "./ThemeChildComponent";

const ThemeComponent = () => {

    const {theme} = useContext(ThemeContext);

    const themeStyle = theme == 'light' ? 'light-theme' : 'dark-theme'
    return (
        <>
            <div className={themeStyle}>
                현재 {theme} 테마 적용 중입니다!

            </div>
            <ThemeChildComponent/>
        </>
    )

}

export default ThemeComponent;