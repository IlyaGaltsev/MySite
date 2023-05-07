import './Header.css'
// import { Link } from 'react-scroll'
import { useLayoutEffect } from 'react'
import React from 'react'
import i18n from '../../i18next'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import logo from '../../assets/icons/logo.svg'

function Header() {
  useLayoutEffect(() => {
    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop
    const header = document.getElementsByTagName('header')[0]

    window.addEventListener('scroll', () => {
      if (scrollPosition() > 20) header.classList.add('header_background')
      else header.classList.remove('header_background')
    })
  }, [])

  // const changeLanguage = e => {
  //   i18n.changeLanguage(e.target.value)
  // }

  // const navigation = [
  //   {
  //     label: 'Обо мне',
  //     anchor: 'main'
  //   },
  //   {
  //     label: 'Навыки',
  //     anchor: 'skills'
  //   },
  //   {
  //     label: 'Проекты',
  //     anchor: 'projects'
  //   },
  //   {
  //     label: 'Контакты',
  //     anchor: 'contacts'
  //   }
  // ]

  return (
    <header>
      <div className="header__wrapper">
        {/* <nav> */}
        {/* <ul>
            {navigation.map(({ label, anchor }) => {
              return (
                <li>
                  <Link
                    to={anchor}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-70}
                  >
                    <span>#</span>
                    {label}
                  </Link>
                </li>
              )
            })} */}

        {/* <li>
              <Link
                to=""
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                
              </Link>
            </li>
            <li>
              <Link
                to=""
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                
              </Link>
            </li>
            <li>
              <Link
                to=""
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                
              </Link>
            </li>
          </ul>
        </nav> */}
        <img
          src={logo}
          alt="GI"
        />
        <HiOutlineMenuAlt3 size={32} />
        {/* <div className="header__toggle-landuage">
          {' '}
          <select
            onChange={changeLanguage}
            defaultValue={i18n.language}
          >
            <option value="en">A</option>
            <option value="ru">РУ</option>
          </select>
        </div> */}
      </div>
    </header>
  )
}

export default Header
