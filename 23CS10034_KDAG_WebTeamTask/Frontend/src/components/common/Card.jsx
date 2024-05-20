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
            <h2>{title}</h2>
            <p>{para}</p>
            <NavLink
                to="/courses/data/week/1"
                className="btn"
                onClick={() => goToTop()}>
                Start Course
            </NavLink>
        </div>
    );
};

export default Card;
