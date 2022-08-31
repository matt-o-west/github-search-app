import './Searchbar.css';
//import Followers from './Followers';
//import Socials from './Socials';
 
function Searchbar(props) {
    //const [card, setCard] = useState([]);


    return (
        <form className="searchbar" onSubmit={props.onFormSubmit}>
            <img src="icon-search.svg" alt="search" />
            <input className='text' type="text" placeholder="Search Github username..." onChange={props.onFormChange}/>
            <button className='searchbutton' type="submit" value="Search">Search</button>
        </form>
    );
}

export default Searchbar;