import { NavLink } from 'react-router-dom'
import "../css/mobileMenu.css"

export const LinkMobile = ({ data: { to, text } }) => {
    return (
        <NavLink to={to} className="MobileNavLink">{text}</NavLink>
    )
}