
import "./Socials.css";

function Socials() {
    //const [card, setCard] = useState([]);

    return (
        <div className="socials">
            <div className="location"><img src="icon-location.svg" alt="location"/> Location</div>
            <div className="twitter"><img src="icon-twitter.svg" alt="location"/> Twitter</div>
            <div className="site"><img src="icon-website.svg" alt="location"/> Site</div>
            <div className="work"><img src="icon-company.svg" alt="location"/> Work</div>
        </div>
    );
}

export default Socials;