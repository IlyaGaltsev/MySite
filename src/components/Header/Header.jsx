import './Header.css'
import { Link } from 'react-scroll'
import { useLayoutEffect } from 'react'
import React from 'react'
import i18n from '../../i18next'

function Header() {
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

  return (
    <header>
      <div className="header__wrapper">
        <nav>
          <ul>
            <li>
              <Link
                to="main"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                Обо мне
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                Навыки
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                Проекты
              </Link>
            </li>
            <li>
              <Link
                to="contacts"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header__toggle-landuage">
          {' '}
          <select
            onChange={changeLanguage}
            defaultValue={i18n.language}
          >
            <option value="en">A</option>
            <option value="ru">РУ</option>
          </select>
        </div>
      </div>
    </header>
  )
}

export default Header
