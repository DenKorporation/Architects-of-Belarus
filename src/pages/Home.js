import './Home.css'
import AboutSection from "../infoblocks/Info/Info";
import Person from "../infoblocks/Person/Person";
import Developer from "../infoblocks/Creators/Developer";

function Home() {
    return (
        <div className = "HomePage">
            <Person/>
            <div className="info-section">
                <AboutSection/>
                <Developer/>
            </div>
        </div>
    )
}

export default Home