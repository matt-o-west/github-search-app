import './Card.css';
import Followers from './Followers';
import Socials from './Socials';
import { useContext } from "react";
import { ThemeContext } from '../helpers/ThemeContext.js';


function Card(props) {
    const context = useContext(ThemeContext);
    console.log(props.username)

    return (
        <div className="card" id={context.theme}>
            <div className="cardheader">
            <img src={props.username.avatar_url ?? "icon-not-available.svg"} alt="" className="avatar"/>
            <div className="username">
            <span>{props.username.name ?? "not given"}</span>
            </div>
            <span className="joined">{props.username.created_at ?? "Not Available"}</span>
            <div className='handle'>
            <span>@{props.username.login ?? "none"}</span>
            
            
            </div>
        
        
        
        </div>
        <p>{props.username.bio ?? "no bio available"}</p>
        <div className="card-content">


        <div className="followers">
        <Followers followers={props.username.followers} following={props.username.following} public_repos={props.username.public_repos} id={props.id}/>
        </div>
        <div className="socials">
        <Socials location={props.username.location} company={props.username.company} blog={props.username.blog} twitter_username={props.username.twitter_username}/>
        </div>
        </div>
        </div>
    );
}

export default Card;