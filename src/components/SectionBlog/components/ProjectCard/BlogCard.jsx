import './BlogCard.scss'
import { AiOutlineGlobal, AiOutlineGithub } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'
// import { Link } from 'react-router-dom'

const BlogCard = ({
  image,
  path,
  id,
  title,
  description,
  deploy,
  github,
  technologies
}) => {
  return (
    <Link href={`/blog/${id}`} className='blog-card'>
      <img src={image} alt={`prewiew ${title}`} />
      <div className='blog-card__contant'>
        <div>
          <h3>{title}</h3>
          <div className='blog-card__actions'>
            {github && (
              <button>
                <span>
                  Github  
                  <AiOutlineGithub size={20} />
                </span>
              </button>
            )}
            {deploy && (
              <button>
                <span>
                  Сайт  
                  <AiOutlineGlobal size={20} />
                </span>
              </button>
            )}
          </div>
        </div>
        <BsArrowRight size={32} className='blog-card__icon' />
      </div>
    </Link>
  )
}

export { BlogCard }
