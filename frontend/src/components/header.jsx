import "../css/header.css"
import "../css/nav.css"
import { NavLink } from 'react-router-dom'
import { IconButton } from '@mui/material';
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { VscGithubAction } from "react-icons/vsc";
import { GoPackage } from "react-icons/go";
import { GrShieldSecurity } from "react-icons/gr";
GrShieldSecurity
import React, { useState } from 'react';
import { MobileMenu } from "./mobileMenu";
import { DropdownMenu } from "./dropdownMenu";


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        document.documentElement.classList.toggle('menu-open');
        document.body.classList.toggle('menu-open');

    };

    const dataActions = [
        { link: "/", text: "Automate any workflow", title: "Actions", Icons: VscGithubAction },
        { link: "/package", text: "Host and manage packages", title: "Package", Icons: GoPackage },
        { link: "/", text: "Find and fix vulnerabilities", title: "Security", Icons: GrShieldSecurity }
    ]

    return (
        <>
            {isOpen && <MobileMenu isOpen={isOpen} />}
            <header>
                <span className="logo">
                    TNDDIS
                </span>
                <nav>
                    <DropdownMenu data={dataActions} />
                    <NavLink to="/" className="link"> Home </NavLink>
                    <NavLink to="/user" className="link"> User </NavLink>
                    <NavLink to="/login" className="link"> Login </NavLink>
                    <NavLink to="/Messi" className="link"> Messi </NavLink>
                </nav>
                <div className="mobileNavButton" >
                    <IconButton onClick={handleClick}>
                        {isOpen ? <IoIosClose color="white"/> : <IoIosMenu color="white"/>}
                    </IconButton>
                </div>
            </header>
        </>
    )


}
