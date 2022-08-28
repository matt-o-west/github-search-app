import './Card.css';
import Followers from './Followers';
import Socials from './Socials';

function Card(props) {
    //const [card, setCard] = useState([]);


console.log(props.username.company)
    return (
        <div className="card">
            <img src={props.username.avatar_url} alt="" className="avatar"/>
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