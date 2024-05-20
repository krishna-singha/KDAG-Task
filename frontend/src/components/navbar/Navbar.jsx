import { NavLink } from "react-router-dom";
import { kdagLogo } from "../../assets/images/export";
import "./style.css"

const Navbar = () => {

    const goToTop = () => {
        window.scrollTo(0, 0);
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
                    <div className="nav-links">
                        <NavLink to="/" onClick={() => goToTop()}>Home</NavLink>
                        <NavLink to="/courses" onClick={() => goToTop()}>Courses</NavLink>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;