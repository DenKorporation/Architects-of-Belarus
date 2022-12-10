import './Home.css'
import AboutSection from "../infoblocks/Info/Info";
import Person from "../infoblocks/Person/Person";
import Developer from "../infoblocks/Creators/Developer";

function Home() {
    return (
        <>
            <Person/>
            <div className="info-section">
                <AboutSection/>
                <Developer/>
            </div>
        </>
    )
}

export default Home