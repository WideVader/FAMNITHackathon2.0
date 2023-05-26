import { Outlet } from "react-router-dom";
import { Header } from "../components/header"
import { NewsContainer } from "../components/container";


export const Layout = () => {
    return (
        <>
            <Header />
            <NewsContainer>
                <Outlet />
            </NewsContainer>
        </>
    )
}