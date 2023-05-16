import blogs from '@/data/blogs.json'
import { BlogCard } from './components/ProjectCard/BlogCard'
import './SectionBlog.css'

const SectionBlog = () => {
  return (
    <section
      className="section-blogs"
      id="blogs"
    >
      <h2 className="app-title-h2">Мысли вслух</h2>
      <div className="section-blogs__grid">
        {blogs.data.map(blog => (
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
