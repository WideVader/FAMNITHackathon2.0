import "../css/mobileMenu.css"
import { ButtonNav } from "./buttonMobileNav"
import { LinkMobile } from "./linkForMenuMobile"

export const MobileMenu = ({ isOpen }) => {

    const link = [
        {
            to: "/", text: "Product", key: 1
        },
        {
            to: "/messi", text: "Solutions", key: 2
        },
        {
            to: "/messi", text: "Open Source", key: 3
        },
        {
            to: "/messi", text: "Pricing", key: 4
        }
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
            <ButtonNav> Sign in </ButtonNav>
        </div>
    )
}