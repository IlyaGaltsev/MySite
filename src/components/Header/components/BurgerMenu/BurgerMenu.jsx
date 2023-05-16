import React from "react";
import links from "../../../../data/links";
import Link from "../Link/Link";
import "./BurgerMenu.css";

const BurgerMenu = ({setVisibleMenu}) => {
    return(
        <div className="burger-menu__wrapper">
            <div className="burger-menu__buttons">
                {links.map(link => <Link key={link.id} id={link.id} link={link} setVisibleMenu={setVisibleMenu}/>)}
            </div>
        </div>
    )
}
export default BurgerMenu;