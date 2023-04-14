import links from "../../data/links";
import Link from "./components/Link/Link";
import "./Header.css";
import { IoIosSunny, IoMdMoon } from "react-icons/io";
import { useTheme } from "../../useTheme";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import { useLayoutEffect, useState } from "react";
import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";
import React from "react";

function Header() {
  const { theme, setTheme } = useTheme("light");
  const [visibleMenu, setVisibleMenu] = useState(false);

  const onHandleClickTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useLayoutEffect(() => {
    const scrollPosition = () =>
      window.pageYOffset || document.documentElement.scrollTop;
    const header = document.getElementsByTagName("header")[0];
    console.log(header);
    window.addEventListener("scroll", () => {
      if (scrollPosition() > 20) header.classList.add("header_background");
      else header.classList.remove("header_background");
    });
    // if (visibleMenu === true) {
    //   document.body.classList.add("body_hidden");
    // } else {
    //   document.body.classList.remove("body_hidden");
    //   let lastScroll = 0;
    //   const defaultOffset = 100;
    //   const header = document.querySelector(".header");

    //   const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    //   const containHide = () => header.classList.contains("hide");

    // window.addEventListener("scroll", () => {
    //     if (
    //       scrollPosition() > lastScroll &&
    //       !containHide() &&
    //       scrollPosition() > defaultOffset
    //     ) {
    //       //down
    //       header.classList.add("hide");
    //     } else {
    //       // up
    //       if (scrollPosition() < lastScroll && containHide()) {
    //         header.classList.remove("hide");
    //       }
    //     }
    //     lastScroll = scrollPosition();
    //   });
    // }
  }, [visibleMenu]);

  const onHandleClickMenu = () => {
    setVisibleMenu(visibleMenu === false ? true : false);
  };
  return (
    <header>
      <div className="header__wrapper">
        <nav>
          <ul>
            <li>Обо мне</li>
            <li>Навыки</li>
            <li>Проекты</li>
            <li>Контакты</li>
          </ul>
        </nav>
        <div className="header__toggle-landuage">PY</div>
      </div>
    </header>
  );
}

export default Header;

// <header className="header">
// <div className="header__wrapper">
//   <div className="buttons__wrapper">
//     {links.map((link) => (
//       <Link key={link.id} link={link} />
//     ))}
//   </div>
//   <div className="header__burger">
//     {visibleMenu === false ? (
//       <RiMenu2Fill
//         size={24}
//         className="icon iconburger"
//         onClick={onHandleClickMenu}
//       />
//     ) : (
//       <RiCloseFill
//         size={24}
//         className="icon iconburger"
//         onClick={onHandleClickMenu}
//       />
//     )}
//     {visibleMenu === true ? (
//       <BurgerMenu setVisibleMenu={setVisibleMenu} />
//     ) : null}
//   </div>

//   <div className="theme-button">
//     {theme === "light" ? (
//       <IoMdMoon size={24} className="icon" onClick={onHandleClickTheme} />
//     ) : (
//       <IoIosSunny
//         size={24}
//         className="icon"
//         onClick={onHandleClickTheme}
//       />
//     )}
//   </div>
// </div>
// </header>
