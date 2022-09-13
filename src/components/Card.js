import './Card.css';
import Followers from './Followers';
import Socials from './Socials';
import { useContext } from "react";
import { ThemeContext } from '../helpers/ThemeContext.js';


function Card(props) {
    const context = useContext(ThemeContext);
    console.log(props.username)


function parseDate(tdate) {
  const systemDate = new Date(Date.parse(tdate));
  const userDate = new Date();
  const diff = Math.floor((userDate - systemDate) / 1000);
  if (diff <= 1) {return 'just now';}
  if (diff < 20) {return diff + ' seconds ago';}
  if (diff < 40) {return 'half a minute ago';}
  if (diff < 60) {return 'less than a minute ago';}
  if (diff <= 90) {return 'one minute ago';}
  if (diff <= 3540) {return Math.round(diff / 60) + ' minutes ago';}
  if (diff <= 5400) {return '1 hour ago';}
  if (diff <= 86400) {return Math.round(diff / 3600) + ' hours ago';}
  if (diff <= 129600) {return '1 day ago';}
  if (diff < 604800) {return Math.round(diff / 86400) + ' days ago';}
  if (diff <= 777600) {return '1 week ago';}

  
  
  return 'on ' + systemDate;

  
}

    return (
        <div className="card" id={context.theme}>
            <div className="cardheader">
            <img src={props.username.avatar_url ?? "icon-not-available.svg"} alt="" className="avatar"/>
            <div className="username">
            <span>{props.username.name ?? "not given"}</span>
            <div className='handle'>
            <span>@{props.username.login ?? ""}</span>
            </div>
            </div>
            
            <span className="joined">joined {parseDate(props.username.created_at) ?? ""}</span>
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