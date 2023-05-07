import { useForm } from 'react-hook-form'
import { TextFiled } from '../TextFiled'
import './SectionContacts.scss'
import axios from 'axios'
import { ErrorHandler } from '../ErrorHandler'

const SectionContacts = ({ handleOpenModal }) => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const submit = data => {
    axios
      .post('https://mysite-backend.onrender.com/api/submit-form', data)
      .then(data => alert.log('success'))
      .catch(error => console.log(error.response))
  }

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
            <a href='mailto:galsev_i@inbox.ru'>galsev_i@inbox.ru</a>
          </div>

          <div className="contacts__card">
            <p>Телефон</p>
            <a href='tel:+7 930 474 69 99'>+7 930 474 69 99</a>
          </div>

          <button className="primary-button">Заполнить заявку </button>

          {/* <form
            className="contacts__form"
            onSubmit={handleSubmit(submit)}
          >
            <TextFiled
              title="Ваше имя"
              name="name"
              register={register}
              error={errors.name}
              options={{
                required: {
                  value: true,
                  message: 'Обязательное поле'
                },
                maxLength: { value: 20, message: 'Превышена максимальная длинна' }
              }}
            />
            <TextFiled
              title="Адрес эл. почты"
              name="email"
              register={register}
              error={errors.email}
              options={{
                required: {
                  value: true,
                  message: 'Обязательное поле'
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Адрес не существует'
                }
              }}
            />
            <TextFiled
              title="Текст сообщения"
              type="textarea"
              name="message"
              register={register}
              error={errors.message}
              options={{
                required: {
                  value: true,
                  message: 'Обязательное поле'
                },
                maxLength: {
                  value: 1240,
                  message: 'Превышена максимальная длинна'
                }
              }}
            />
            <div style={{ marginBottom: 16 }}>
              <label>
                <input
                  type="checkbox"
                  {...register('termsOfUse', {
                    required: {
                      value: true,
                      message: 'Необходимо ваше соглашение'
                    }
                  })}
                />
                Я соглашаюсь с 
                <span
                  className="link"
                  onClick={handleOpenModal}
                >
                  политикой конфенденциальности
                </span>
              </label>
              {errors.termsOfUse && <ErrorHandler message={errors.termsOfUse.message} />}
            </div>
            <button className="primary-button">Отправить</button>
          </form> */}
        </div>
        <div className="contacts__right">
          <a href=''>GitHub</a>
          <a href=''>Telegram</a>
          <a href=''>WhatsApp</a>
          <a href=''>VK</a>
        </div>
      </div>
    </section>
  )
}

export { SectionContacts }
