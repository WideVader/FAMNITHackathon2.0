import { Card } from "../components/card"
import "../css/newLife.css"
import { Filter } from "../components/filter";
import { BiSearchAlt2 } from "react-icons/bi";
import { FilterMobile } from "../components/filter";
import { useState } from "react";
import axios from "../util/axiosBackend"

export const NewLife = () => {

    const [data, setData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [search, setSearch] = useState("")
    const [req, SetReq] = useState({
        adress: "",
        filter: []
    })

    const GetDataa = (e, index) => {
        const newData = [...data]
        newData[index] = parseInt(e.target.value)
        setData(newData)
    }

    const Submit = () => {
        SetReq({
            address: search,
            filter: data
        })

        axios.get("/listings", req).then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const dataa = [{
        _id: 1,
        address: "Čevljarska 30, Koper",
        title: "Dvosobno stanovanje",
        amenities: [{
            wifi: true,
        }, {
            breakfast: true
        }, {
            parking: true,
        }, {
            pets: true,
        }],
        star: 4.5,
        price: 250,
        url: "",
        image: "https://www.mojcimer.si/storage/image/202107/mediumcover/20210702_160206.jpg"
    },
    {
        _id: 2,
        address: "Čevljarska 30, Koper",
        title: "Dvosobno stanovanje",
        amenities: [{
            wifi: true,
        }, {
            breakfast: true
        }, {
            parking: true,
        }, {
            pets: true,
        }],
        star: 4.5,
        price: 250,
        url: "",
        image: "https://www.mojcimer.si/storage/image/202209/mediumcover/20200621-172515.jpg"
    },
    {
        _id: 3,
        address: "Čevljarska 30, Koper",
        title: "Dvosobno stanovanje",
        amenities: [{
            wifi: true,
        }, {
            breakfast: true
        }, {
            parking: true,
        }, {
            pets: true,
        }],
        star: 4.5,
        price: 250,
        url: "",
        image: "https://www.mojcimer.si/storage/image/202107/mediumcover/20210702_160206.jpg"
    },
    {
        _id: 4,
        address: "Čevljarska 30, Koper",
        title: "Dvosobno stanovanje",
        amenities: [{
            wifi: true,
        }, {
            breakfast: true
        }, {
            parking: true,
        }, {
            pets: true,
        }],
        star: 4.5,
        price: 250,
        url: "",
        image: "https://www.mojcimer.si/storage/image/202209/mediumcover/20200621-172515.jpg"
    }]


    return (
        <div className="newLife">
            <div className="FilterForDesktop">
                <Filter GetDataa={GetDataa} />
            </div>
            <div className="DataForDesktop">
                <h1 className="SearchTitle">Where to Stay?</h1>
                <div className="searchBar">
                    <input type="text" onChange={(event) => { setSearch(event.target.value) }} className="searchBarInput" placeholder="Search hotels, apartment and more" />
                    <button className="buttonSearch" onClick={() => { Submit() }}>
                        <BiSearchAlt2 />
                    </button>
                </div>
                <FilterMobile GetDataa={GetDataa} />
                {dataa.map(e => {
                    return (
                        <Card key={e._id} data={e} />
                    )
                })}
            </div>
        </div>
    )
}

//https://dribbble.com/shots/15378085-Statu-Real-Estate-Home-Page