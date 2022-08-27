import './Followers.css';
//import Socials from './Socials';

function Followers() {
    //const [card, setCard] = useState([]);

    return (
        <div className="stats">
        <table>
            <tr>
                <th className='tablehead'>Repos</th>
                <th className='tablehead'>Followers</th>
                <th className='tablehead'>Following</th>
            </tr>
            <tr>
                <td className='repos'>###</td>
                <td className='followers'>###</td>
                <td className='following'>###</td>
            </tr>

        </table>
            
        </div>
    );
}

export default Followers;