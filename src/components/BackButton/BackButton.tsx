import Link from 'next/link'
import styles from './BackButton.module.scss'
import { BsArrowLeft } from 'react-icons/bs'
import { IBackButton } from '@/types'

const BackButton = ({ path }: IBackButton) => {
  return (
    <Link className={styles.link} href={path ? path : '/' }>
      <BsArrowLeft size={32} />
      Назад
    </Link>
  )
}

export { BackButton }
