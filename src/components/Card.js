import './Card.css';
import Followers from './Followers';
import Socials from './Socials';

function Card() {
    //const [card, setCard] = useState([]);


    return (
        <div className="card">
            <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" className="avatar"/>
        <div className="username">
        <span>Username</span>
        </div>
        <div className="card-content">
            <p>I am a very simple card to display github user info. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        <Followers />
        <Socials />
        </div>
        </div>
    );
}

export default Card;