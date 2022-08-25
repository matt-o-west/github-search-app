import './Searchbar.css';
//import Followers from './Followers';
//import Socials from './Socials';
 
function Searchbar() {
    //const [card, setCard] = useState([]);


    return (
        <form className="searchbar">
            <img src="icon-search.svg" alt="search" />
            <input className='text' type="text" placeholder="Search Github username..."/>
            <button className='searchbutton' type="submit">Search</button>
        </form>
    );
}

export default Searchbar;