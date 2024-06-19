import { useContext } from "react";
import { assets } from "../../assets/assets.js"
import "./Navbar.scss"
import { Link } from "react-router-dom"
import { StoreContext } from "../../context/StoreContext.jsx";

export default function Navbar({ setShowLogin }) {
    const { getTotal } = useContext(StoreContext)

    function toggleIcon() {
        const links = document.querySelector(".links-navbar");
        links.classList.toggle('active')
    }

    return (
        <div className="navbar">
            <Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>

            <ul className="links-navbar">
                <li><a href='#home'>Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#mebile">Mobile App</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>

            <div className="nav-bar-icon" onClick={toggleIcon}>
                <i className="fa-solid fa-bars"></i>
            </div>

            <div className="icons-btn">
                <img src={assets.search_icon} alt="" className="search" />
                <Link to="/cart">
                    <div className="cart-icon">
                        <img src={assets.basket_icon} alt="" />
                        {getTotal() !== 0 && <div className="dot"></div>}
                    </div>
                </Link>
                <button onClick={() => setShowLogin(true)}>Sign in</button>
            </div>
        </div>
    )
}