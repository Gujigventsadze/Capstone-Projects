import React, { useState } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from 'react-router-dom';


export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    }

    return (   
        <>        
            <div className={menuOpen ? "display-x" : "display-none"}>
                <CloseIcon onClick={handleMenuClick} />
            </div>
        <div className="header-container">
            <div className="top-left">
                <ShoppingCartOutlinedIcon sx={{ fontSize: "xx-large" }} />
                <div className="name">Online Shop</div>
            </div>
            <div className={menuOpen ? "menu-clicked": "top-middle"}>
                <Link to='/' className="nav-link">Home</Link>
                <Link to='/products' className="nav-link">Products</Link>
                <Link to='/about' className="nav-link">About</Link>
                <Link to='/contact' className="nav-link">Contact</Link>
                <Link to='/cart' className={menuOpen ? "nav-link" : "display-none"}>Cart</Link>
            </div>
            <div className="top-right">
                <div className="cart">
                    <ShoppingBagOutlinedIcon />
                    <Link to='/cart' className="nav-link">Cart</Link>
                </div>
            </div>
            <div className={menuOpen ? "display-none" : "menu-icon"}>
                <MenuIcon onClick={handleMenuClick} />
            </div>
        </div>
        </>
    );
}
