
import "./Socials.css";
//import { useState, useEffect } from "react";

function Socials(props) {

    return (
        <div className="socials" id={props.id}>
            <div className="location"><img src="icon-location.svg" alt="location"/> {props.location ?? " none"}</div>
            <div className="twitter"><img src="icon-twitter.svg" alt="twitter"/> {props.twitter_username ?? " none"}</div>
            <div className="site"><img src="icon-website.svg" alt="website"/> {props?.blog?.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "") ?? " none"}</div>
            <div className="work"><img src="icon-company.svg" alt="work"/> {props.company ?? " none"}</div>
        </div>
    );
}

export default Socials;