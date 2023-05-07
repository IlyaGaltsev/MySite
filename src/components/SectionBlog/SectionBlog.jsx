// import { BlogCard } from './components/BlogCard/BlogCard'
import { blogs } from '../../data/blogs'
import { BlogCard } from './components/ProjectCard/BlogCard'
import './SectionBlog.css'

const SectionBlog = () => {
  return (
    <section
      className="section-blogs"
      id="blogs"
    >
      <h2 className="app-title-h2">Мысли в слух</h2>
      <div className="section-blogs__grid">
        {blogs.map(blog => (
          <BlogCard
            key={blog.id}
            {...blog}
          />
        ))}
      </div>
    </section>
  )
}

export { SectionBlog }
