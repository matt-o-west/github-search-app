
import "./Socials.css";
import { useState, useEffect } from "react";

function Socials(props) {



    return (
        <div className="socials">
            <div className="location"><img src="icon-location.svg" alt="location"/>{props.username?.location ?? " none"}</div>
            <div className="twitter"><img src="icon-twitter.svg" alt="twitter"/>{props.username?.twitter_username ?? " none"}</div>
            <div className="site"><img src="icon-website.svg" alt="website"/>{props.username?.blog ?? " none"}</div>
            <div className="work"><img src="icon-company.svg" alt="work"/>{props.username?.company ?? " none"}</div>
        </div>
    );
}

export default Socials;