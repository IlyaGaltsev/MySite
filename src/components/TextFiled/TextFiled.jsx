import { ErrorHandler } from '../ErrorHandler'
import styles from './TextFiled.module.scss'

const TextFiled = ({ title, name, type, register, error, options }) => {
  return (
    <div className={`${styles.input} ${error ? styles.error : ''}`}>
      <p>{title}</p>

      {type === 'textarea' ? (
        <textarea {...register(name, options)} />
      ) : (
        <input {...register(name, options)} />
      )}

      {error && <ErrorHandler message={error.message} />}
    </div>
  )
}

export { TextFiled }
