import "../css/header.css"
import "../css/nav.css"
import { NavLink } from 'react-router-dom'
import { IconButton } from '@mui/material';
import { IoIosMenu, IoIosClose } from "react-icons/io";
import React, { useState } from 'react';
import { MobileMenu } from "./mobileMenu";
import { useUser } from "../context/userContext";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const user = useUser()

    const handleClick = () => {
        setIsOpen(!isOpen);
        document.documentElement.classList.toggle('menu-open');
        document.body.classList.toggle('menu-open');
    };


    return (
        <>
            {isOpen && <MobileMenu isOpen={isOpen} />}
            <header>
                <NavLink to="/">
                    <span className="logo">
                        DR
                        {/* TNDDIS */}
                    </span>
                </NavLink>
                <nav>
                    <NavLink to="/" className="link"> Home </NavLink>
                    <NavLink to="/newlife" className="link"> Search </NavLink>
                    <NavLink to="https://github.com/WideVader/FAMNITHackathon2.0" className="link"> Documentation </NavLink>
                    {user.data ? <p className="link">{user.data.username}</p> : <NavLink to="/login" className="link"> Login </NavLink>}
                </nav>
                <div className="mobileNavButton" >
                    <IconButton onClick={handleClick}>
                        {isOpen ? <IoIosClose color="var(--link-text)" /> : <IoIosMenu color="var(--link-text)" />}
                    </IconButton>
                </div>
            </header>
        </>
    )


}
