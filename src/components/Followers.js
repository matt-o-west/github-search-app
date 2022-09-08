import './Followers.css';
import { useContext } from "react";
import {ThemeContext} from '../helpers/ThemeContext.js';


function Followers(props) {
    const context = useContext(ThemeContext);



    return (
        <div className="stats" id={context.theme}>
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