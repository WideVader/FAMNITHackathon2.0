import "../css/login.css"
import axios from "../util/axiosBackend"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../context/userContext"

export const Login = () => {
    let navigate = useNavigate()

    const [data, SetData] = useState([{
        username: "",
        password: ""
    }])

    const user = useUser()

    const GetData = (e) => {
        SetData({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }

    const saveToLocalStorage = (id) => {
        localStorage.setItem("id", id)
    }

    const Submit = (e) => {
        e.preventDefault()

        axios.post("/login", data)
            .then((data) => {
                console.log(data.data.user)
                user.setData(data.data.user)
                navigate("/", { replace: true })
            }).catch((err) => {
                console.log(err)
            })
    }


    return (
        <form onSubmit={Submit} className="container">
            <h2 className="signIn">Sign in to NAME</h2>
            <div className="form">
                <label className="loginLabel" htmlFor="text">Username or email address</label>
                <input onChange={GetData} className="inputText" type="text" name="username" id="text" />
                <label className="loginLabel" htmlFor="password">Password</label>
                <input onChange={GetData} className="inputPassword" type="password" name="password" id="" />
                <button className="signButton">Sign in</button>
            </div>
            <div className="footer"> <p>New to NAME?</p> <a href="">Create an account</a>. </div>
        </form>
    )
}