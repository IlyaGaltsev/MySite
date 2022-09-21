import links from '../../data/links';
import Link from './components/Link/Link';
import './Header.css';
import { IoIosSunny, IoMdMoon } from "react-icons/io";
import { useTheme } from '../../useTheme';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import { useLayoutEffect, useState } from 'react';
import {RiMenu2Fill, RiCloseFill} from "react-icons/ri";

function Header() {
  const {theme, setTheme} = useTheme('light')
  const [visibleMenu, setVisibleMenu] = useState(false)

  const onHandleClickTheme = () => {
    setTheme((theme === 'light') ? 'dark' : 'light');
   
  }
  useLayoutEffect(()=> {
    if (visibleMenu === true){
      document.body.classList.add('body_hidden')
    }else{
      document.body.classList.remove('body_hidden')
       let lastScroll = 0;
    const defaultOffset = 100;
    const header = document.querySelector('.header');

    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    const containHide = () => header.classList.contains('hide')

    window.addEventListener('scroll', () => {
      if(scrollPosition() > lastScroll && !containHide()&& scrollPosition() > defaultOffset){
        header.classList.add('hide')
        // console.log('down')
      }
      else {
        if (scrollPosition()<lastScroll && containHide()){
          header.classList.remove('hide')
          // console.log('up')
        }
      }
      lastScroll=scrollPosition();
    })
    }
  },[visibleMenu])

  const onHandleClickMenu = () => {
    setVisibleMenu((visibleMenu === false)? true : false)
  }
  return (
    <header className='header'>
      <div className="header__wrapper">
        <div className="buttons__wrapper">
            {links.map(link => <Link id={link.id} link={link}/>)}
        </div>
        <div className="header__burger">
          {
            (visibleMenu===false)
            ?<RiMenu2Fill size={24} className='icon iconburger' onClick={onHandleClickMenu} />
            :<RiCloseFill size={24} className='icon iconburger' onClick={onHandleClickMenu} />
          }
          {(visibleMenu===true)
          ?<BurgerMenu setVisibleMenu={setVisibleMenu}/>
          : null
          }                  
        </div>

        <div className='theme-button'>
            {(theme === 'light')
            ?<IoMdMoon size={24} className='icon' onClick={onHandleClickTheme} />
            :<IoIosSunny size={24} className='icon' onClick={onHandleClickTheme} />}
        </div>
        </div>
    </header>
  );
}

export default Header;