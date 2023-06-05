import './Header.scss'
// import { Link } from 'reacr'
import { useEffect, useLayoutEffect, useState } from 'react'
import React from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { IoCloseSharp } from 'react-icons/io5'
import { contacts } from '../../data/contacts'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Header() {
  const [isShow, setShow] = useState(false)
  const [isNotMainPage, setNotMainPage] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setNotMainPage(window.location.pathname !== '/')
  }, [router])

  useLayoutEffect(() => {
    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop
    const header = document.getElementsByTagName('header')[0]
    window.addEventListener('scroll', () => {
      if (scrollPosition() > 20) header.classList.add('header_background')
      else header.classList.remove('header_background')
    })
  }, [])

  const navigation = [
    {
      label: 'Главная',
      anchor: '/'
    },
    {
      label: 'Проекты',
      anchor: '/projects'
    },
    {
      label: 'Блог',
      anchor: '/blogs'
    },
    {
      label: 'Контакты',
      anchor: '/#contacts'
    }
  ]

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (window.pageYOffset / totalHeight) * 100
      setProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header>
      <div className="header__wrapper">
        <Link href="/">
          <Image
            src="/icons/logo.svg"
            alt="GI"
            width={38}
            height={38}
            priority
          />
        </Link>

     
   

        <button
          class={`cmn-toggle-switch cmn-toggle-switch__htx ${isShow ? 'active' : ''}`}
          onClick={() => setShow(!isShow)}
        >
          <span>toggle menu</span>
        </button>

        {/* <button class="cmn-toggle-switch cmn-toggle-switch__htla">
  <span>toggle menu</span>
</button>

<button class="cmn-toggle-switch cmn-toggle-switch__htra">
  <span>toggle menu</span>
</button> */}

        <div className={`header__menu ${isShow ? 'header__menu_open' : ''}`}>
          <ul>
            {navigation.map(({ label, anchor }) => {
              return (
                <li key={anchor}>
                  {/*   smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-70} */}
                  <Link
                    className="animate-link"
                    href={anchor}
                    onClick={() => setShow(false)}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="header__menu-bottom">
            {/* <button>en</button> */}
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
      </div>
    </header>
  )
}

export default Header
