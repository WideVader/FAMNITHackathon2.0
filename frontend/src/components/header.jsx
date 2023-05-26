import "../css/header.css"
import "../css/nav.css"
import { NavLink } from 'react-router-dom'
import { IconButton } from '@mui/material';
import { IoIosMenu, IoIosClose } from "react-icons/io";
import React, { useState } from 'react';
import { MobileMenu } from "./mobileMenu";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        document.documentElement.classList.toggle('menu-open');
        document.body.classList.toggle('menu-open');
       
    };

    return (
        <>
            {isOpen && <MobileMenu isOpen={isOpen}/> }
            <header>
                <span className="logo">
                    TNDDIS
                </span>
                <nav>
                    <NavLink to="/" className="link"> Home </NavLink>
                    <NavLink to="/Jug" className="link"> Jug </NavLink>
                    <NavLink to="/Ronaldo" className="link"> Ronaldo </NavLink>
                    <NavLink to="/Messi" className="link"> Messi </NavLink>
                </nav>
                <div className="mobileNavButton" >
                    <IconButton onClick={handleClick}>
                        {isOpen ? <IoIosClose /> : <IoIosMenu />}
                    </IconButton>
                </div>
            </header>
        </>
    )


}
