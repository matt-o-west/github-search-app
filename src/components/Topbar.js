import './Topbar.css';
import {ThemeContext} from '../helpers/ThemeContext.js';
import { useContext } from "react";
 
function Topbar(props) {
    const context = useContext(ThemeContext);
    
    return (
        <div className="topbar" >
            <span>devfinder.to</span>
            <button className='darkmode' onClick={() => context.toggleTheme()} >LIGHT <img src="icon-sun.svg" className='theme' alt="light" ></img></button>
        </div>
    );
}

export default Topbar;