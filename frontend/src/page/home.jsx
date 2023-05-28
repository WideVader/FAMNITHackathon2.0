import "../css/home.css"
import { Link } from "react-router-dom";


export const Home = () => {
    return (
        <>
            <div className="homeBaneerSection">
                <div className="leftSideHome">
                    <h1 className="headerSectionHome"> <span className="upadaUOci">Discover</span> the World with Our Travel Apartman Unveiling Limitless Adventures</h1>
                    <p className="homeSectiomHeroParagraf">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam, deserunt quae eos sed dignissimos vel culpa beatae alias vero dolorem.
                        Voluptatibus cum ratione corrupti tempore eligendi beatae eius explicabo assumenda!
                    </p>
                    <Link to={`/newlife/`}>
                        <button>Lets Trie</button>
                    </Link>
                </div>
                <img className="sectionImage" src="City-Travel-Transparent-Free-PNG.png" alt="" />
            </div>
            <div className="homeCards">
                <h1 className="SuperTitle">What can we offer you?</h1>
                <div className="cardHome">
                    <div className="cardHomeContent one">
                        <h1>Chack Best option for you</h1>
                        <q>Lorem ipsum dolor sit amet consectetur adipisicing elit.</q>
                    </div>
                    <div className="cardHomeContent two">
                        <h1>Chack Best option for you</h1>
                        <q>Lorem ipsum dolor sit amet consectetur adipisicing elit.</q>
                    </div>
                    <div className="cardHomeContent three">
                        <h1>Chack Best option for you</h1>
                        <q>Lorem ipsum dolor sit amet consectetur adipisicing elit.</q>
                    </div>
                    <div className="cardHomeContent four">
                        <h1>Chack Best option for you</h1>
                        <q>Lorem ipsum dolor sit amet consectetur adipisicing elit.</q>
                    </div>
                </div>
            </div>
            <div>
                <div className="MoreInfoSection">
                    <img className="MoreInfoImage" src="./Travel-PNG-High-Quality-Image.png" alt="" />
                    <div className="MoreInfoText">
                        <h1>New Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, fugit reiciendis ad ipsam nihil vero hic nemo quos omnis sit atque alias, perferendis quia tenetur velit fuga molestiae? Labore, natus!</p>
                    </div>
                </div>
            </div>
            <img src="168131-travel-free-png-hq.png" alt="" />
        </>
    )
}