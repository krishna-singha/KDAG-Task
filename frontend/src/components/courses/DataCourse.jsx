import React, { useEffect, useState } from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";
import "./style.css";
import axios from 'axios';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const dataCourse = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const location = useLocation();
    const isActive = (path) => {
        return location.pathname.startsWith(path);
    };

    const params = useParams();
    const id = parseInt(params.id);
    const courseFormat = params.format;

    const [courseData, setCourseData] = useState([]);
    const [maxLength, setMaxLength] = useState(0);

    useEffect(() => {
        const handleData = async () => {
            const getData = await axios.get(`${BACKEND_URL}/api/${courseFormat}/${id}`);
            setCourseData(getData.data.courseData);
            setMaxLength(getData.data.maxLength);
        }
        handleData();
    }, [id, courseFormat]);

    if (isNaN(id) || id < 1 || id > maxLength) {
        return <div>Invalid Day number</div>;
    }

    const capitalFirstChar = (char) => {
        return char.charAt(0).toUpperCase() + char.slice(1);
    }

    const goToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <div className='course'>
                <div className="course-header">
                    <div className="course-header-top">
                        <h2 className="course-title">Choose Course Format:</h2>
                        <div className="view-mode-buttons">
                            <NavLink
                                to={"/courses/data/week/1"}
                                className={isActive("/courses/data/week") ? "btn active" : "btn"}
                            >Week-wise</NavLink>
                            <NavLink
                                to={"/courses/data/day/1"}
                                className={isActive("/courses/data/day") ? "btn active" : "btn"}
                            >Day-wise</NavLink>
                        </div>
                    </div>
                </div>
                <div className="course-header-bottom">
                    <h3>Select particular {courseFormat}:</h3>
                    <button
                        onClick={() => toggleModal()}
                        className="btn">
                        Click here
                    </button>
                </div>
                {modalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close"
                                onClick={() => toggleModal()}>
                                &times;
                            </span>
                            <h2>Select {courseFormat}:</h2>
                            <div className="modal-links">
                                {[...Array(maxLength)].map((_, index) => (
                                    <NavLink
                                        key={index}
                                        to={`/courses/data/${courseFormat}/${index + 1}`}
                                        onClick={() => {
                                            toggleModal();
                                            goToTop();
                                        }}>
                                        {courseFormat} {index + 1}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                <div className="box">
                    <div className="course-heading">
                        <h1>Course: Data analytics</h1>
                    </div>
                    <h2>
                        <span>
                            {capitalFirstChar(courseFormat)} {id} :
                        </span> {courseData.title}
                    </h2>
                    <div className="topics-covered">
                        <h3>Topics Covered:</h3>
                        {courseData.topics.map((topic, ind) => (
                            <div key={ind}>
                                <h4>
                                    <i className="fa-solid fa-caret-right"></i>
                                    {topic.title}
                                </h4>
                                <p>{topic.content}</p>
                            </div>
                        ))}
                    </div>
                    <div className="readings inside-box">
                        <h3>Readings:</h3>
                        {courseData.reading.map((read, ind) => (
                            <div key={ind}>
                                <i className="fa-solid fa-caret-right"></i>
                                <p>{read}</p>
                                <span>click here</span>
                            </div>
                        ))}
                    </div>
                    <div className="inside-box">
                        <h3>Assignments:</h3>
                        {courseData.assignments.map((assign, ind) => (
                            <div key={ind}>
                                <i className="fa-solid fa-caret-right"></i>
                                <p>{assign}</p>
                            </div>
                        ))}
                    </div>
                    <div className="inside-box">
                        <h3>Resources:</h3>
                        {courseData.resources.map((resource, ind) => (
                            <div key={ind}>
                                <i className="fa-solid fa-caret-right"></i>
                                <p>{resource}</p>
                                <span>click here</span>
                            </div>
                        ))}
                    </div>
                    <div className="btns">
                        {id > 1 && (
                            <NavLink
                                to={`/courses/data/${courseFormat}/${id - 1}`}
                                className="btn prev"
                                onClick={() => goToTop()}>
                                Previous
                            </NavLink>
                        )}
                        {id < maxLength && (
                            <NavLink
                                to={`/courses/data/${courseFormat}/${id + 1}`}
                                className="btn next"
                                onClick={() => goToTop()}>
                                Next
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default dataCourse;
