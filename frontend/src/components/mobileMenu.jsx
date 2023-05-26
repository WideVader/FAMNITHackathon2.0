import "../css/mobileMenu.css"

export const MobileMenu = ({ isOpen }) => {
    return (
        <div className="mobileMenu"
            style={{top: isOpen ? `calc(${document.documentElement.scrollTop}px + 70px)`  : "" }}
        >

        </div>
    )
}