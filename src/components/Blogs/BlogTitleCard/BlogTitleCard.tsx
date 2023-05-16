import Image from 'next/image'
import { IBlog } from '@/types'
import styles from './BlogTitleCard.module.scss'

const BlogTitleCard = ({ id, image, title, text }: IBlog) => {
  return (
    <div className={styles.card}>
      <Image
        src={image ?? ''}
        width={140}
        height={96}
        alt='my-photo'
        priority
      />
      <div className={styles.titles}>
        <h3 className={styles.title}>{title ?? 'Такого проекта нет :('}</h3>
        <p className={styles.subtitle}>Читается за 5 мин</p>
      </div>
    </div>
  )
}

export { BlogTitleCard }
