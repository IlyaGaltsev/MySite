import './Header.scss'
import { Link } from 'react-scroll'
import { useLayoutEffect, useState } from 'react'
import React from 'react'
import i18n from '../../i18next'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { IoCloseSharp } from 'react-icons/io5'
import logo from '../../assets/icons/logo.svg'
import { contacts } from '../../data/contacts'

function Header() {
  const [isShow, setShow] = useState(false)

  useLayoutEffect(() => {
    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop
    const header = document.getElementsByTagName('header')[0]
    window.addEventListener('scroll', () => {
      if (scrollPosition() > 20) header.classList.add('header_background')
      else header.classList.remove('header_background')
    })
  }, [])

  const changeLanguage = e => {
    i18n.changeLanguage(e.target.value)
  }

  const navigation = [
    {
      label: 'Обо мне',
      anchor: 'main'
    },
    {
      label: 'Навыки',
      anchor: 'skills'
    },
    {
      label: 'Проекты',
      anchor: 'projects'
    },
    {
      label: 'Контакты',
      anchor: 'contacts'
    }
  ]

  return (
    <header>
      <div className="header__wrapper">
        <img
          src={logo}
          alt="GI"
        />

        <div
          className="header__menu-icon"
          onClick={() => setShow(!isShow)}
        >
          {isShow ? <IoCloseSharp size={32} /> : <HiOutlineMenuAlt3 size={32} />}
        </div>

        <div className={`header__menu ${isShow ? 'header__menu_open' : ''}`}>
          <ul>
            {navigation.map(({ label, anchor }) => {
              return (
                <li>
                  <Link
                    className="animate-link"
                    to={anchor}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-70}
                    onClick={() => setShow(false)}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="header__menu-bottom">
            <button>en</button>
            <a
              className="animate-link"
              href={contacts.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
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
