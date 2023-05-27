import { useState, useEffect } from "react"
import axios from "../util/axiosBackend"

export const User = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("/users", data)
            .then((data) => {
                setData(data.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])
    
    return (
        <>
            {
                data.map((data, index) => {
                    return (
                        <div key={index}>
                            <p>{data.email}</p>
                            <p>{data.password}</p>
                            <p>{data.username}</p>
                        </div>
                    )
                })
            }
        </>
    )
}