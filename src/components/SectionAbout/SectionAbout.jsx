import figure from '../../assets/images/background__figure.svg'
import SmoothMoveBlock from './SmoothMoveBlock'
import './SectionAbout.css'
import { useTranslation } from 'react-i18next'

function SectionAbout() {
  const { t } = useTranslation()
  return (
    <section
      id="main"
      className="section-about__wrapper"
    >
      <h1>
        {t('AboutTitle_first')} <span>web</span> {t('AboutTitle_second')}?
      </h1>
      <p>{t('AboutSubTitle')}</p>
      <div className="section-about__actions">
        <button className="primary-button">Написать мне</button>
        <button className="secoundary-button">Резюме</button>
      </div>

      <SmoothMoveBlock />

      <img
        className="section-about__background"
        src={figure}
        alt="background__figure"
      />
    </section>
  )
}

export { SectionAbout }
