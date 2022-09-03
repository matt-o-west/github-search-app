import './Topbar.css';
//import Followers from './Followers';
//import Socials from './Socials';
 
function Topbar(props) {
    


    return (
        <div className="topbar">
            <span>devfinder.to</span>
            <button className='darkmode' onClick={props.onDarkMode}>LIGHT <img src="icon-sun.svg" className='theme' alt="light"></img></button>
        </div>
    );
}

export default Topbar;