import './BlogCard.scss'
import { AiOutlineGlobal, AiOutlineGithub } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
// import { Link } from 'react-router-dom'

const BlogCard = ({
  image,
  id,
  title,
}) => {
  return (
    <Link href={`/blogs/${id}`} className='blog-card'>
      <Image src={image} width={420} height={286} alt={`prewiew ${title}`} />
      <div className='blog-card__contant'>
        <div>
          <h3>{title}</h3>
          
        </div>
        <BsArrowRight size={32} className='blog-card__icon' />
      </div>
    </Link>
  )
}

export { BlogCard }
