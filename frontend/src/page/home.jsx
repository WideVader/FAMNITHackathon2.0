import "../css/home.css"
import { Link } from "react-router-dom";


export const Home = () => {
    return (
        <>
            <div className="homeBaneerSection">
                <div className="leftSideHome">
                    <h1 className="headerSectionHome"> <span className="upadaUOci">Discover</span> the best housing that suits your needs.</h1>
                    <p className="homeSectiomHeroParagraf"> DistanceRentals provides you with the best possible housing opportunities based on your requirements.  
                    </p>
                    <Link to={`/newlife/`}>
                        <button>Try it out</button>
                    </Link>
                </div>
                <img className="sectionImage" src="City-Travel-Transparent-Free-PNG.png" alt="" />
            </div>
            <div className="homeCards">
                <h1 className="SuperTitle">What can we offer you?</h1>
                <div className="cardHome">
                    <div className="cardHomeContent one">
                        <h1>Personalized reccomendations</h1>
                        <p>Analzyes your profile data to recommend best accomodation.S</p>
                    </div>
                    <div className="cardHomeContent two">
                        <h1>Proximity to Amenities</h1>
                        <p>Provide rating of housing based on its proximity to amenities vital to you.</p>
                    </div>
                    <div className="cardHomeContent three">
                        <h1>All in one place</h1>
                        <p>No need to search on different websites due to our data aggregation.</p>
                    </div>
                    <div className="cardHomeContent four">
                        <h1>Insight</h1>
                        <p>Find out more about your future home.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="MoreInfoSection">
                    <img className="MoreInfoImage" src="./Travel-PNG-High-Quality-Image.png" alt="" />
                    <div className="MoreInfoText">
                        <h1>Our goal</h1>
                        <p> Our primary goal is to simplify the housing search process, save users valuable time and effort, and help them find a place they can truly call home. We believe that by leveraging personalized data-driven insights about available housing, we can provide users with a more efficient and satisfying housing search experience, ultimately improving their overall quality of life.  </p>
                    </div>
                </div>
            </div>
            <img src="168131-travel-free-png-hq.png" alt="" />
        </>
    )
}