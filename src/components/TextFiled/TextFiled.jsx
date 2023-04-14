import { ErrorHandler } from '../ErrorHandler'
import './TextFiled.css'

const TextFiled = ({ title, name, type, register, error, options }) => {
  return (
    <div className={`text-filed ${error && 'text-filed_error'}`}>
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
