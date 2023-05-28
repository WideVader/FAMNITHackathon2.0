import { Card } from "../components/card"
import "../css/newLife.css"
import { Filter } from "../components/filter";
import { BiSearchAlt2 } from "react-icons/bi";
import { FilterMobile } from "../components/filter";
import { useState } from "react";
import axios from "../util/axiosBackend";
import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";

export const NewLife = () => {
    const user = useUser()

    const [loading, setLoading] = useState(false);

    const [data, setData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [req, setReq] = useState({
        adress: "",
        filter: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    });

    const [dataa, setDataa] = useState([])

    const GetDataa = (e, index) => {
        const newData = data;
        newData[index] = parseInt(e.target.value);
        // console.log("đđđđđ", e.target.value, index, newData);
        setData(newData);
        setReq({ ...req, filter: data })
    };
    console.log(req);
    const Submit = () => {
        setLoading(true);
        axios.post("/listings", req)
            .then((data) => {
                setDataa(data.data)
                console.log(data.data)
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                setLoading(false);
            })
    };

    const Recommended = () => {
        // console.log(user.data._id)
        axios.post("/recommend", { _id: user.data._id })
            .then((data) => {
                setDataa(data.data)
                console.log(data.data)
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                setLoading(false);
            })
    }

    return (
        <>
            <div className="newLife">
                <div className="FilterForDesktop">
                    <Filter GetDataa={GetDataa} />
                </div>
                <div className="DataForDesktop">
                    <div className="req">
                        <h1 className="SearchTitle">Where to Stay?</h1>
                        { user.data && <button onClick={Recommended} className="Recommend">Recommend</button>} 
                    </div>
                    <div className="NavLinije">
                        <input type="text" onChange={(event) => { setReq({ ...req, adress: event.target.value }) }} className="searchBarInput" placeholder="Search hotels, apartment and more" />
                        <button className="buttonSearch" onClick={() => { Submit() }}>
                            <BiSearchAlt2 />
                        </button>
                    </div>
                    <FilterMobile GetDataa={GetDataa} />
                    {loading ? (
                        <div className="lupa">
                            <img src="03-16-39-160_512.webp" alt="loading..." className="loading" />
                        </div>
                    ) : dataa.length == 0 ? <div className="lupa"> <BiSearchAlt2 size={100} /></div> :
                        dataa.map(e => {
                            if (e != null) {
                                return (
                                    <Link key={e[0]._id} to={e[0].url}>
                                        <Card data={e} />
                                    </Link>
                                )
                            }
                        })}
                </div>
            </div>
        </>
    )
}
