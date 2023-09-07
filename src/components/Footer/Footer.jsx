import LogoFooter from "../../images/logo_footer.png";
import './Footer.css';

function Header() {
    return (
        <footer className="footer_section">
            <div className="footer_container">
                <img src={LogoFooter} alt="Footer logo" />
                <div className="footer_copyright">© 2020 Kasa. All rights reserved</div>
            </div>
        </footer>
    )
}

export default Header;