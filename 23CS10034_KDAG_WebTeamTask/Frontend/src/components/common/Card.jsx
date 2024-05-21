import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css";

const Card = ({ imgLink, title, para }) => {

    const goToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className='course-card'>
            <img src={imgLink} alt={title} />
            <h2 className='heading3'>{title}</h2>
            <p className='paragraph2'>{para}</p>
            <NavLink
                to="/courses/data/week/1"
                className="btn btnText"
                onClick={() => goToTop()}>
                Start Course
            </NavLink>
        </div>
    );
};

export default Card;
