import { Card } from "../components/card"
import "../css/newLife.css"
import { Filter } from "../components/filter";
import { BiSearchAlt2 } from "react-icons/bi";
import { FilterMobile } from "../components/filter";
import { useState } from "react";
import axios from "../util/axiosBackend";
import { Link } from "react-router-dom";

export const NewLife = () => {

    const [loading, setLoading] = useState(false);

    const [data, setData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [req, setReq] = useState({
        adress: "",
        filter: []
    });

    const [dataa, setDataa] = useState([])

    const GetDataa = (e, index) => {
        const newData = [...data];
        newData[index] = parseInt(e.target.value);
        setData(newData);
        setReq({ ...req, filter: data })
    };

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


    return (
        <>
            <div className="newLife">
                <div className="FilterForDesktop">
                    <Filter GetDataa={GetDataa} />
                </div>
                <div className="DataForDesktop">
                    <h1 className="SearchTitle">Where to Stay?</h1>
                    <div className="searchBar">
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
                            return (
                                <Link key={e[0]._id} to={`/newlife/${e[0]._id}`}>
                                    <Card data={e} />
                                </Link>
                            )
                        })}
                </div>
            </div>
        </>
    )
}
