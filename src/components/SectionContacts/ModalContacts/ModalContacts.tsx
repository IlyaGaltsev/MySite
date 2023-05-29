import { TextFiled } from '@/components/TextFiled'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
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
