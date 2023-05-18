import './SectionAbout.scss'
import { Link } from 'react-scroll'
import Image from 'next/image'
import { mainTitleFont } from '@/fonts'
import { useEffect } from 'react'

function SectionAbout() {
  useEffect(() => {
    const canvas = document.getElementById('starCanvas')
    const ctx = canvas.getContext('2d')
    const width = window.innerWidth
    const height = window.innerHeight
    const starCount = 100
    const stars = []

    canvas.width = width
    canvas.height = height

    const createStar = () => {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        color: 'white',
        velocity: Math.random() * 0.5 + 0.1,
        direction: Math.random() > 0.5 ? -1 : 1
      }
    }

    for (let i = 0; i < starCount; i++) {
      stars.push(createStar())
    }

    const drawStar = star => {
      const { x, y, radius, color, opacity } = star
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, 2 * Math.PI)
      ctx.fillStyle = `rgba(255, 255, 255, ${1})`
      ctx.fill()
    }

    const updateStarPosition = star => {
      star.x += star.velocity * star.direction

      if (star.x > width + 10 || star.x < -10) {
        star.x = Math.random() * width
        star.opacity = 0
        star.fadeIn = Math.random() * 0.05 + 0.02
        star.fadeOut = Math.random() * 0.05 + 0.02
      }
    }

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]
        drawStar(star)
        updateStarPosition(star)
      }

      requestAnimationFrame(drawFrame)
    }

    drawFrame()
  }, [])

  return (
    <section
      id="main"
      className="section-about__wrapper"
    >
      <canvas id="starCanvas"></canvas>
      <div className="section-about__titles">
        <h1 style={mainTitleFont.style}>Создаю сайты и веб-приложения</h1>
        <p>
          А так же MVP мобильных приложений. Специализируюсь на разработке интерфейсов. Люблю
          пробовать новое в программировании. Студент последнего курса ТГУ им. Г. Р. Державина и уже
          имею опыт продуктовой разработки
        </p>
        <div className="section-about__actions">
          <Link
            style={{ transform: 'none', position: 'static' }}
            to={'contacts'}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            <button className="primary-button">Связaться</button>
          </Link>
          <button className="secoundary-button">Скачать резюме</button>
        </div>
      </div>
      <div className="section-about__illustration">
        <Image
          className="illustration__bottom-arrow"
          src="/images/decorate-arrow1.svg"
          alt="decorate-item"
          width={262}
          height={262}
          priority
        />
        <Image
          className="illustration__top-arrow"
          src="/images/decorate-arrow2.svg"
          alt="decorate-item"
          width={96}
          height={96}
          priority
        />
        <Image
          className="illustration__avatar"
          src="/images/avatar.png"
          alt="my-photo"
          width={229}
          height={254}
          priority
        />
      </div>
    </section>
  )
}

export { SectionAbout }
