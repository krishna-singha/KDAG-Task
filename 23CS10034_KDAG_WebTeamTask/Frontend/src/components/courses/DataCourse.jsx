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
            const getData = await axios.get(`${BACKEND_URL}/api/data/${courseFormat}/${id}`);
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
            <section className="dataCourse">
                <div className='dataCourse-container'>
                    <div className="course-header">
                        <div className="course-header-top">
                            <h2 className="course-title heading3">Choose Course Format:</h2>
                            <div className="view-mode-buttons">
                                <NavLink
                                    to={"/courses/data/week/1"}
                                    className={isActive("/courses/data/week") ? "btn active btnText2" : "btn btnText2"}
                                >Week-wise</NavLink>
                                <NavLink
                                    to={"/courses/data/day/1"}
                                    className={isActive("/courses/data/day") ? "btn active btnText2" : "btn btnText2"}
                                >Day-wise</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="course-header-bottom">
                        <h3 className="heading3">Select particular {courseFormat}:</h3>
                        <button
                            onClick={() => toggleModal()}
                            className="btn btnText2">
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
                                <h2 className="heading3">Select {courseFormat}:</h2>
                                <div className="modal-links">
                                    {[...Array(maxLength)].map((_, index) => (
                                        <NavLink
                                            key={index}
                                            to={`/courses/data/${courseFormat}/${index + 1}`}
                                            className={"btnText2"}
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
                            <h1 className="heading2">Course: Data analytics</h1>
                        </div>
                        <h2 className="heading3">
                            <span>
                                {capitalFirstChar(courseFormat)} {id} :
                            </span> {courseData.title}
                        </h2>
                        <div className="topics-covered">
                            <h3 className="heading3">Topics Covered:</h3>
                            {courseData.topics.map((topic, ind) => (
                                <div key={ind}>
                                    <h4 className="heading3">
                                        <i className="fa-solid fa-caret-right"></i>
                                        {topic.title}
                                    </h4>
                                    <p className="paragraph">{topic.content}</p>
                                </div>
                            ))}
                        </div>
                        <div className="readings inside-box">
                            <h3 className="heading3">Readings:</h3>
                            {courseData.reading.map((read, ind) => (
                                <div key={ind}>
                                    <i className="fa-solid fa-caret-right"></i>
                                    <p className="paragraph">{read} <span>click here</span></p>
                                </div>
                            ))}
                        </div>
                        <div className="inside-box">
                            <h3 className="heading3">Assignments:</h3>
                            {courseData.assignments.map((assign, ind) => (
                                <div key={ind}>
                                    <i className="fa-solid fa-caret-right"></i>
                                    <p className="paragraph">{assign}</p>
                                </div>
                            ))}
                        </div>
                        <div className="inside-box">
                            <h3 className="heading3">Resources:</h3>
                            {courseData.resources.map((resource, ind) => (
                                <div key={ind}>
                                    <i className="fa-solid fa-caret-right"></i>
                                    <p className="paragraph">{resource} <span>click here</span></p>
                                    
                                </div>
                            ))}
                        </div>
                        <div className="btns">
                            {id > 1 && (
                                <NavLink
                                    to={`/courses/data/${courseFormat}/${id - 1}`}
                                    className="btn prev btnText2"
                                    onClick={() => goToTop()}>
                                    Previous
                                </NavLink>
                            )}
                            {id < maxLength && (
                                <NavLink
                                    to={`/courses/data/${courseFormat}/${id + 1}`}
                                    className="btn next btnText2"
                                    onClick={() => goToTop()}>
                                    Next
                                </NavLink>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default dataCourse;
