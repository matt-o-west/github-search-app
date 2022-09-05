import './Followers.css';
//import Socials from './Socials';

function Followers(props) {
    //const [card, setCard] = useState([]);
    console.log(props)


    return (
        <div className="stats" id={props.id}>
        <table>
            <tr>
                <th className='tablehead'>Repos</th>
                <th className='tablehead'>Followers</th>
                <th className='tablehead'>Following</th>
            </tr>
            <tr>
                <td className='repos'>{props.public_repos}</td>
                <td className='followers'>{props.followers}</td>
                <td className='following'>{props.following}</td>
            </tr>

        </table>
            
        </div>
    );
}

export default Followers;