import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { kdagLogo } from "../../assets/images/export";
import "./style.css"

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(true);
    const toggleHamburger = () => {
        setMenuOpen(!menuOpen);
    }

    const goToTop = () => {
        window.scrollTo(0, 0);
        toggleHamburger();
    }

    return (
        <>
            <header>
                <nav>
                    <div className="nav-logo">
                        <NavLink to="/" onClick={() => goToTop()}>
                            <img src={kdagLogo} alt="" />
                        </NavLink>
                    </div>
                    {/* <div className={`overlay ${menuOpen ? "" : "active"}`}>djugwd</div> */}
                    <div className={`nav-links ${menuOpen ? "" : "active"}`}>
                        <NavLink to="/" onClick={() => goToTop()}>Home</NavLink>
                        <NavLink to="/courses" onClick={() => goToTop()}>Courses</NavLink>
                    </div>
                    <div className="hamburger">
                        <i className={`fa-solid ${menuOpen ? "fa-bars-staggered" : "fa-xmark"}`} onClick={() => toggleHamburger()}></i>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;