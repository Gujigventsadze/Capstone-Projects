import { useState } from "react";
import "../NavBar.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';

export const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="nav-bar">
            <div className="logo">
                <span className="logo-title">LOGO</span>
            </div>
            <div className={menuOpen ? "flex-column" : "navbar-links"} onClick={handleMenuClick}>
                <div className={menuOpen ? "close-icon" : "display-none"}>
                    <CloseIcon />
                </div>
                <Link to="home" smooth={true} duration={500}>
                    Home
                </Link>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
                <Link to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
            </div>
            <div className="contact-links">
                <a href="ig"><InstagramIcon style={{fontSize:'40px'}} /></a>
                <a href="fb"><FacebookIcon style={{fontSize:'40px'}} /></a>
                <a href="github"><GitHubIcon style={{fontSize:'40px'}} /></a>
                <Link to="contact" smooth={true} duration={500} className="hire-me" >HIRE ME</Link>
            </div>
            <div className={menuOpen ? "display-none" : "menu-icon"}>
                <MenuIcon onClick={handleMenuClick} />
            </div>
        </div>
    )
}
