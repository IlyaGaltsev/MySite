import { BackButton } from '@/components/BackButton'
import '@/styles/pages/projects.scss'
import path from 'path'
import fs from 'fs'
import { BlogCard } from '@/components/SectionBlog/components/ProjectCard'
import { SectionContacts } from '@/components/SectionContacts'

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'public/data/blogs.json')
  const jsonData = fs.readFileSync(filePath, 'utf8')
  const blogs = JSON.parse(jsonData)

  return {
    props: {
      blogs
    }
  }
}

export default function Blogs({ blogs }: any) {
  return (
    <>
    <section
      className="section-projects"
      id="projects"
    >
      <div className="section-projects__main">
        <BackButton path="/" />
        <h1 className="main-title">Мысли вслух</h1>
        <p className="main-subtitle">
          Накапливая опыт разработки, появились мысли которыми стоит поделиться
        </p>
      </div>
      <div className="section-projects__grid">
        {blogs.data.map((item: any) => (
          <BlogCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
    <SectionContacts/>
    </>
  )
}
