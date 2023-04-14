import backgroundfigure from '../../assets/images/background__figure_light.svg'
import avatar from '../../assets/images/contacts-avatar.png'
import telegram from '../../assets/icons/telegram.svg'
import { axiosClient } from '../../axiosClient'
import { useForm } from 'react-hook-form'
import { TextFiled } from '../TextFiled'
import './SectionContacts.css'

const SectionContacts = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const submit = data => {
    axiosClient
      .post('/submit-form', data)
      .then(data => console.log('success'))
      .catch(error => console.log(error.response))
  }

  return (
    <section
      id="contacts"
      className="contacts"
    >
      <form
        className="contacts__form"
        onSubmit={handleSubmit(submit)}
      >
        <h3 className="form__title">Оставить заявку</h3>
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
              value: 240,
              message: 'Превышена максимальная длинна'
            }
          }}
        />
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
        />
        <label for="vehicle1">Я соглашаюсь с политикой конфенденциальности</label>
        <button className="primary-button">Отправить</button>
      </form>
      <img
        className="contacts__background-figure"
        src={backgroundfigure}
        alt="figure"
      />
      <form className="contacts__form">
        <h3 className="form__title">Или написать в другом мессенджере</h3>
        <img
          className="contacts__avatar"
          src={avatar}
          alt="avatar"
        />
        <h4 className="contacts__title">Илья Гальцев</h4>
        <h5 className="contacts__subtitle">Middle- Frontend Engineer</h5>
        <button className="accent-button">
          Написать в Telegram
          <object>
            <img
              src={telegram}
              alt="telegram"
            />
          </object>
        </button>
      </form>
    </section>
  )
}

export { SectionContacts }
