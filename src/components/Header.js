import { Link } from 'react-router-dom';

import "./Header.css"

const Header = (props) => {
    return (
        <div id="header">
            <Link to="/comp4513-a1/" id="logo">&#127917;</Link>
            <button>About</button>
        </div>
    );
}

export default Header;