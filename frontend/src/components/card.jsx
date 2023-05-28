import "../css/card.css"
import { GrLocation } from "react-icons/gr";
import { ParameterCard } from "../components/parametarsCard"
import { AiOutlineWifi } from "react-icons/ai";
import { MdOutlineBreakfastDining } from "react-icons/md";
import { MdPets } from "react-icons/md";
import { MdLocalParking } from "react-icons/md";


export const Card = ({ data }) => {

    console.log(data[0])

    const Reating = (star) => {
        //golang ima mape, ovo smece nema lijepu sintaksu za mape 
        if (star == 4) {
            return "Good"
        } else {
            return "Perfect"
        }
    }

    return (
        <div className="cardPart">
            <img className="imageBannerCard" src={data[0].image} alt="" />
            <div className="fullScreenWidth">
                <h2 className="titleCard">{data[0].title}</h2>
                <div className="address">
                    <GrLocation /> <p>{data[0].adress}</p>
                </div>

                <div className="amenitiesCard">
                    {data[0].filters[3].pets && <ParameterCard data={{Icon: MdPets, text: "Pet"}}/>}
                    {data[0].filters[1].breakfast &&<ParameterCard data={{Icon: MdOutlineBreakfastDining, text: "Breakfast"}}/>}
                    {data[0].filters[2].parking && <ParameterCard data={{Icon: MdLocalParking, text: "Parking"}}/>}
                    {data[0].filters[0].wifi && < ParameterCard data={{Icon: AiOutlineWifi, text: "Wi-Fi"}}/>}
                </div>

                <div className="data-information">
                    <div className="star">
                        4.5
                    </div>
                    <p className="star-reating">{Reating(4.5)}</p>
                    <p className="price"><span className="priceBold">{data[0].price}$</span> <span className="night">/night</span> </p>
                </div>
            </div>
        </div>
    )
}