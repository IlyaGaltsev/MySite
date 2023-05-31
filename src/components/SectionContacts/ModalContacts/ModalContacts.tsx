import { TextFiled } from '@/components/TextFiled'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import styles from './ModalContacts.module.scss'
import { AiOutlineClose } from 'react-icons/ai'

interface IModalContacts {
  isOpen: boolean
  closeModal: Function
}
const ModalContacts = ({ isOpen, closeModal }: IModalContacts) => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const handleCloseModal = () => {
    closeModal()
  }

  const redirectToRules = () => {
    window.open(
      'https://docs.google.com/document/d/1bMklD-XSLZsqp8FqxGkyL17iWf1DnKmOwtMnEZ9tMlw/edit?usp=sharing',
      '_blank'
    )
  }
  const handleSubmitForm = handleSubmit(async data => {
    console.log(data)
    setTimeout(() => {
      closeModal()
      toast.success('Заявка отправлена!', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      })
    }, 1000)

    await axios.post('https://mysite-backend.onrender.com/api/submit-form', data).catch(error => {
      closeModal()
      toast.error('Упс... Заявка не дошла, попробуйте позже', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      })
    })
  })

  if (!isOpen) return null

  return (
    <div
      className={styles.overlay}
      onClick={handleCloseModal}
    >
      <form
        className={styles.body}
        onClick={e => e.stopPropagation()}
        onSubmit={handleSubmitForm}
      >
        <div className={styles.title}>
          <h3>Заявка на проект</h3>{' '}
          <AiOutlineClose
            size={24}
            style={{ cursor: 'pointer' }}
            onClick={handleCloseModal}
          />
        </div>
        <div className={styles.inputs}>
          <TextFiled
            title="Текст сообщения"
            type="textarea"
            name="message"
            placeholder="Введите текст сообщения"
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
          <div className={styles.row}>
            <TextFiled
              title="Ваше имя"
              type=""
              name="name"
              placeholder="Введите ваше имя"
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
              type=""
              title="Адрес эл. почты"
              name="email"
              placeholder="Введите ваш адрес эл. почты"
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
          </div>
        </div>
        <div className={styles.button__container}>
          <button className="primary-button">Отправить</button>
          <p className={styles.textRules}>
            Нажимая кнопку Отправить вы соглашаетесь с 
            <span onClick={redirectToRules}>политикой конфиденциальности</span>
          </p>
        </div>
      </form>
    </div>
  )
}

export { ModalContacts }
