import { NavLink } from 'react-router-dom'
import "../css/dropDownLink.css"

export const DropDownLink = ({ data: { link, text, Icons, title } }) => {
    return (
        <NavLink to={link} className="LinkDropDownMenu">
            <Icons className="sizeIcons" />
            <div className='textContainer'>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </NavLink>
    )
}