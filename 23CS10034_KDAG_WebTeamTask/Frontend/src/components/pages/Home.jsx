import "./style.css";

const Home = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="heading">Welcome to <span>KDAG</span></h1>
                <p className="paragraph">
                    Fostering Innovation in Data Analytics at IIT Kharagpur <br /><br />
                    KDAG is aimed at bringing Data Analytics and Machine Learning enthusiasts together under the umbrella of a single society, and providing ample opportunities & resources that are required to build a successful career in this emerging domain. Our initiatives include cutting-edge research, hands-on workshops, and collaborative projects that bridge the gap between academia and industry. Join us to explore the transformative power of data and unlock new opportunities for growth and innovation.
                </p>
                <button className="btnText">Join Our Community</button>
            </div>
        </section>
    );
}

export default Home;