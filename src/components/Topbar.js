import './Topbar.css';
//import Followers from './Followers';
//import Socials from './Socials';
 
function Topbar(props) {

    console.log(props)
    
    function toggleTheme() {
        props.onThemeToggle();
    }

    return (
        <div className="topbar" >
            <span>devfinder.to</span>
            <button className='darkmode' onClick={toggleTheme} id={props.id}>LIGHT <img src="icon-sun.svg" className='theme' alt="light" ></img></button>
        </div>
    );
}

export default Topbar;