import './SectionAbout.scss'
import { useTranslation } from 'react-i18next'
import avatar from '../../assets/images/avatar.png'
import decorateArrow1 from '../../assets/images/decorate-arrow1.svg'
import decorateArrow2 from '../../assets/images/decorate-arrow2.svg'

function SectionAbout() {
  const { t } = useTranslation()

  return (
    <section
      id="main"
      className="section-about__wrapper"
    >
      <div className="section-about__titles">
        <h1>{t('AboutTitle_first')}</h1>
        <p>{t('AboutSubTitle')}</p>
        <div className="section-about__actions">
          <button className="primary-button">Связaться</button>
          <button className="secoundary-button">Скачать резюме</button>
        </div>
      </div>
      <div className="section-about__illustration">
        <img
          className="illustration__bottom-arrow"
          src={decorateArrow1}
          alt="Илья Гальцев"
        />
        <img
          className="illustration__top-arrow"
          src={decorateArrow2}
          alt="Илья Гальцев"
        />
        <img
          className="illustration__avatar"
          src={avatar}
          alt="Илья Гальцев"
        />
      </div>

      {/* <MacosWindow className="section-about__macos-window">
        <div className="about-card">
          <div className="about-card__image">
            <img
              src={avatar}
              alt="Илья Гальцев"
            />
          </div>
          <h3 className="about-card__title">Гальцев Илья</h3>

          <p className="about-card__text">Middle- Frontend Engeneer</p>
          <p className="about-card__text">Я проектирую & создаю интерфейсы</p>
          <div className="about-card__actions">
            <button className="primary-button">Контакты</button>
            <button className="primary-button">Резюме</button>
          </div>
        </div>
      </MacosWindow> */}
    </section>
  )
}

export { SectionAbout }
