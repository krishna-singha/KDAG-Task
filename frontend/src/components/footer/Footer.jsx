import React from 'react';
import { kdagLogo } from '../../assets/images/export';
import { NavLink } from 'react-router-dom';
import './style.css';

function Footer() {

    const goToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <footer>
            <div className="footer-content">
                <div className="footer-left">
                    <div className='footer-logo'>
                        <img src={kdagLogo} alt="" />
                    </div>
                    <div className='footer-para'>
                        <p>Empowering data analytics enthusiasts with knowledge and resources to excel in the field of data science.</p>
                    </div>
                </div>
                <div className="footer-middle">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>
                            <i className="fa-solid fa-angles-right"></i>
                            <NavLink to={"/"} onClick={() => goToTop()}>Home</NavLink>
                        </li>
                        <li>
                            <i className="fa-solid fa-angles-right"></i>
                            <NavLink to={"/courses"} onClick={() => goToTop()}>Courses</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="footer-right">
                    <h3>Connect with Us</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/kgpdag" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="mailto:kdagiitkgp@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/kdag/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://www.instagram.com/kdag.iitkgp/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Kharagpur Data Analytics Group. All rights reserved.</p>
                <div className="footer-links">
                    <NavLink to={"/"} onClick={() => goToTop()}>Contact Us</NavLink>
                    <NavLink to={"/"} onClick={() => goToTop()}>Privacy Policy</NavLink>
                    <NavLink to={"/"} onClick={() => goToTop()}>Terms of Service</NavLink>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
