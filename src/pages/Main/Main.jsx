import { SectionContacts } from '../../components/SectionContacts'
import { SectionProjects } from '../../components/SectionProjects'
import { SectionSkills } from '../../components/SectionSkills'
import { SectionAbout } from '../../components/SectionAbout'
import Header from '../../components/Header/Header'
import { useState } from 'react'
import './Main.css'

const Main = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <div className="app__wrapper">
      <Header />
      <div className="app__sections">
        <SectionAbout />
        <SectionSkills />
        <SectionProjects />
        <SectionContacts handleOpenModal={handleOpen} />

        <div>
          <button onClick={handleOpen}>Открыть модальное окно</button>
          {isOpen && (
            <div
              className="modal-wrapper"
              onClick={handleClose}
            >
              <div
                className="modal-wrapper-body"
                onClick={e => e.stopPropagation()}
              >
                <div>
                  <h3>Пользовательское соглашение</h3>
                  <p>
                    Я очень рад что вы хотите оставить своё предложение и использовать для этого
                    форму обратной связи! Прежде чем вы начнете ее использовать, пожалуйста,
                    ознакомьтесь с нашим пользовательским соглашением:
                  </p>
                  <ol>
                    <li>
                      Все ваши данные, которые вы предоставляете в форме обратной связи, будут
                      использоваться только для целей обработки вашего запроса и не будут переданы
                      третьим лицам без вашего явного согласия.
                    </li>
                    <li>
                      Мы не несем ответственности за любые ошибки, пропуски или неточности в
                      информации, которую вы предоставляете в форме обратной связи.
                    </li>
                    <li>
                      Вы обязуетесь не использовать нашу форму обратной связи для передачи любого
                      вида незаконного, вредоносного или оскорбительного материала.
                    </li>
                    <li>
                      Мы оставляем за собой право изменять это пользовательское соглашение в любое
                      время без предварительного уведомления. Пожалуйста, проверяйте это соглашение
                      время от времени, чтобы оставаться в курсе всех изменений.
                    </li>
                    <li>
                      Используя нашу форму обратной связи, вы соглашаетесь с этим пользовательским
                      соглашением и соглашаетесь выполнять все его условия.
                    </li>
                  </ol>
                </div>
                <button className='primary-button' onClick={handleClose}>ОК</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export { Main }
