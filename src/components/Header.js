import { Link } from 'react-router-dom';

import "./Header.css"

const Header = (props) => {
    return (
        <div id="header">
            <Link to="/">Logo</Link>
            <button>About</button>
        </div>
    );
}

export default Header;