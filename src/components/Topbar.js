import './Topbar.css';
import {ThemeContext} from '../helpers/ThemeContext.js';
import { useContext } from "react";
 
function Topbar(props) {
    const context = useContext(ThemeContext);
    console.log(context.theme)
    
    return (
        <div className="topbar" >
            <span>devfinder.to</span>
            <button className={context.theme} onClick={() => context.toggleTheme()} >{context.theme === "dark" ? "LIGHT" : "DARK"} <img src={context.theme === "dark" ? "icon-sun.svg" : "icon-moon.svg"} className='theme' alt="light" ></img></button>
        </div>
    );
}

export default Topbar;