import { AiOutlineCloseCircle } from 'react-icons/ai'
import './ErrorHandler.css'

const ErrorHandler = ({ message }) => {
  return (
    <div className="error-handler">
      <AiOutlineCloseCircle />
      <span>{message}</span>
    </div>
  )
}

export { ErrorHandler }
