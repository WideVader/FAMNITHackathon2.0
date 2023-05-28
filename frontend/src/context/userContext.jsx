import React, { useContext, useState } from "react"

const Context = React.createContext()

export const useUser = () => {
    return useContext(Context)
}

const UserProvider = ({ children }) => {
    const [data, setData] = useState()

    console.log(data)

    return (
        <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
    )
}

export default UserProvider