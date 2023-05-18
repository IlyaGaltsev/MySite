import Link from 'next/link'
import styles from './BackButton.module.scss'
import { BsArrowLeft } from 'react-icons/bs'
import { IBackButton } from '@/types'
import { useRouter } from 'next/router'

const BackButton = ({ path }: IBackButton) => {
  const router = useRouter()
  return (
    <Link
      className={styles.link}
      href={path ? path : '/'}
      onClick={(e) => {
        e.preventDefault
        router.back()
      }}
    >
      <BsArrowLeft size={32} />
      Назад
    </Link>
  )
}

export { BackButton }
