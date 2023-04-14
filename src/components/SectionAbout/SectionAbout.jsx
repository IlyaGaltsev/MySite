import React from 'react'

import figure from '../../assets/images/background__figure.svg'
import './SectionAbout.css'
import SmoothMoveBlock from './SmoothMoveBlock'

function SectionAbout() {
  return (
    <div className="section-about__wrapper">
      <h1>
        В поиске <span>web</span> разработчика?
      </h1>
      <p>
        Специализируюсь на разработке интерфейсов. Люблю пробовать новое в программировании. Студент
        3 курса Тамбовского Государственного Университета им. Г. Р. Державина, имею опыт продуктовой
        разработки
      </p>
      <div className="section-about__buttons">
        <button className="primary-button">Написать мне</button>
        <button className="secoundary-button">Резюме</button>
      </div>

      <SmoothMoveBlock />

      <img
        className="section-about__background"
        src={figure}
        alt="background__figure"
      />
    </div>
  )
}

export { SectionAbout }
