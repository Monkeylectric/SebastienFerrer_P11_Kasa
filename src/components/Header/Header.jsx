import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import './Header.css';

function Header() {
    return (
        <header className="header_section">
            <nav className="header_navbar">
                <div className="header_logo_container">
                    <img src={ logo } alt="" className="header_logo" />
                </div>
                <ul className="header_links">
                    <li className="header_link_item"><NavLink to="/">Accueil</NavLink></li>
                    <li className="header_link_item"><NavLink to="/about">A Propos</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;