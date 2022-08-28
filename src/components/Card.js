import './Card.css';
import Followers from './Followers';
import Socials from './Socials';

function Card(props) {
    //const [card, setCard] = useState([]);


console.log(props.username.company)
    return (
        <div className="card">
            <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" className="avatar"/>
        <div className="username">
        <span>{props.username.login}</span>
        </div>
        <p>{props.username.bio}</p>
        <div className="card-content">


        <div className="followers">
        <Followers followers={props.username.followers} following={props.username.following} public_repos={props.username.public_repos}/>
        </div>
        <div className="socials">
        <Socials />
        </div>
        </div>
        </div>
    );
}

export default Card;