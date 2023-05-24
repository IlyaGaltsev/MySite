import { ModalContacts } from './ModalContacts'
import { contacts } from '../../data/contacts'
import { useState } from 'react'
import './SectionContacts.scss'

const SectionContacts = () => {
  const [isOpenModal, setOpenModal] = useState(false)

  return (
    <section
      id="contacts"
      className="contacts"
    >
      <h2 className="app-title-h2">Контакты</h2>
      <div className="contacts__wrapper">
        <div className="contacts__left">
          <p className="contacts__subtitle">
            Здесь вы можете отправить сообщение напрямую мне если у вас остались какие-либо вопросы
            или предложения. Оставьте свои контактные данные в заявке и я свяжусь с вами.
          </p>
          <div className="contacts__card">
            <p>Почта</p>
            <a
              className="animate-link"
              href={contacts.email}
            >
              galsev_i@inbox.ru
            </a>
          </div>

          <div className="contacts__card">
            <p>Телефон</p>
            <a
              className="animate-link"
              href={contacts.phone}
            >
              +7 930 474 69 99
            </a>
          </div>

          <button
            className="primary-button"
            onClick={() => setOpenModal(true)}
          >
            Заполнить заявку
          </button>
          <ModalContacts
            isOpen={isOpenModal}
            closeModal={() => setOpenModal(false)}
          />
        </div>
        <div className="contacts__right">
          <a
            className="animate-link"
            href={contacts.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="animate-link"
            href={contacts.telegram}
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
          <a
            className="animate-link"
            href={contacts.whatsApp}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            className="animate-link"
            href={contacts.vk}
            target="_blank"
            rel="noreferrer"
          >
            VK
          </a>
        </div>
      </div>
    </section>
  )
}

export { SectionContacts }
