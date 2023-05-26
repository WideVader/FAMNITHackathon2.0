import "../css/dropdownMenu.css"
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { DropDownLink } from "./dropDownLink";

export const DropdownMenu = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="dropdown"
        >
            <p>Product</p> <HiChevronDown />
            {isOpen && (
                <ul className="dropdown-menu">
                    {data.map((e, index) => {
                        return (
                            <DropDownLink key={index} data={e} />
                        )
                    })}
                </ul>
            )}
        </div>
    );
};




