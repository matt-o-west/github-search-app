import './Searchbar.css';
import { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../helpers/ThemeContext.js';

 
function Searchbar(props) {
    const inputRef = useRef();
    const context = useContext(ThemeContext);

    useEffect(() => { 
        inputRef.current.focus()
    }, [])

    return (
        <form className="searchbar" onSubmit={props.onFormSubmit} id={context.theme}>
            <img src="icon-search.svg" alt="search" />
            <input className='text' type="text" placeholder="Search Github username..." onChange={props.onFormChange} ref={inputRef} />
            <button className='searchbutton' type="submit" value="Search">Search</button>
        </form>
    );
}

export default Searchbar;