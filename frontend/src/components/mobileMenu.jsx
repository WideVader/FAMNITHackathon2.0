import "../css/mobileMenu.css"
import { ButtonNav } from "./buttonMobileNav"
import { LinkMobile } from "./linkForMenuMobile"
import { Link } from "react-router-dom";


export const MobileMenu = ({ isOpen }) => {

    const link = [
        {
            to: "/", text: "Home", key: 1
        },
        {
            to: "/newLife", text: "New Life", key: 2
        },
        // {
        //     to: "/messi", text: "Open Source", key: 3
        // }
    ]

    return (
        <div className="mobileMenu"
            style={{ top: isOpen ? `calc(${document.documentElement.scrollTop}px + 70px)` : "" }}
        >
            <div className="linkContainer">
                {link.map(e => {
                    return (
                        <LinkMobile key={e.key} data={e} />
                    )
                })}
            </div>
            <Link to="/login">
                <ButtonNav> Sign in </ButtonNav>
            </Link>
        </div>
    )
}