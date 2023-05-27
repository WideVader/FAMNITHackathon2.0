import "../css/card.css"
import { GrLocation } from "react-icons/gr";
import { ParameterCard } from "../components/parametarsCard"
import { AiOutlineWifi } from "react-icons/ai";
import { MdOutlineBreakfastDining } from "react-icons/md";
import { MdPets } from "react-icons/md";
import { MdLocalParking } from "react-icons/md";


export const Card = ({ data }) => {
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
            <img className="imageBannerCard" src={data.image} alt="" />
            <div className="fullScreenWidth">
                <h2 className="titleCard">{data.title}</h2>
                <div className="address">
                    <GrLocation /> <p>{data.address}</p>
                </div>

                <div className="amenitiesCard">
                    {data.amenities[3].pets && <ParameterCard data={{Icon: MdPets, text: "Pet"}}/>}
                    {data.amenities[1].breakfast &&<ParameterCard data={{Icon: MdOutlineBreakfastDining, text: "Breakfast"}}/>}
                    {data.amenities[2].parking && <ParameterCard data={{Icon: MdLocalParking, text: "Parking"}}/>}
                    {data.amenities[0].wifi && < ParameterCard data={{Icon: AiOutlineWifi, text: "Wi-Fi"}}/>}
                </div>

                <div className="data-information">
                    <div className="star">
                        {data.star}
                    </div>
                    <p className="star-reating">{Reating(data.star)}</p>
                    <p className="price"><span className="priceBold">200$</span> <span className="night">/night</span> </p>
                </div>
            </div>
        </div>
    )
}