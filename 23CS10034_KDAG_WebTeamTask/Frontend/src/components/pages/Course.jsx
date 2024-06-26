import React from 'react';
import { dataAnalytics } from '../../assets/images/export';
import { Card } from '../export';

const Course = () => {

    return (
        <>
            <section id='courses'>
                <div className="course-container">
                    <div className="heading">
                        <h1 className='heading2'>Courses</h1>
                    </div>
                    <div className="courses">
                        <Card
                            imgLink={dataAnalytics}
                            title="Data Analytics"
                            para="Learn data analytics from scratch"
                        />
                        
                        <Card
                            imgLink={dataAnalytics}
                            title="Data Analytics"
                            para="Learn data analytics from scratch"
                        />
                        <Card
                            imgLink={dataAnalytics}
                            title="Data Analytics"
                            para="Learn data analytics from scratch"
                        />
                        <Card
                            imgLink={dataAnalytics}
                            title="Data Analytics"
                            para="Learn data analytics from scratch"
                        />
                        <Card
                            imgLink={dataAnalytics}
                            title="Data Analytics"
                            para="Learn data analytics from scratch"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Course;
