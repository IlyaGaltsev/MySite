import { TextFiled } from '@/components/TextFiled'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import styles from './ModalContacts.module.scss'

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

  const handleSubmitForm = handleSubmit(data => {
    console.log(data)
    axios
      .post('https://mysite-backend.onrender.com/api/submit-form', data)
      .then(data => {
        console.log(data)

        closeModal()
        alert('success')
      })
      .catch(error => {
        closeModal()
        alert(`Возникла ошибка. Попробуйте позже ${error}`)
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
          <h3>Заявка на проект</h3> <div onClick={handleCloseModal}>X</div>
        </div>
        <div className={styles.inputs}>
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
          <div className={styles.row}>
            <TextFiled
              title="Ваше имя"
              type=""
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
              type=""
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
          </div>
        </div>
        <button className="primary-button">Отправить</button>
      </form>
    </div>
  )
}

export { ModalContacts }
