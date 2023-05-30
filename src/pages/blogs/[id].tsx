import Image from 'next/image'
import { useRouter } from 'next/router'
import { SectionContacts } from '@/components/SectionContacts'
import { BlogTitleCard } from '@/components/Blogs/BlogTitleCard'
import '@/styles/pages/project.scss'
import styles from '@/styles/global.module.scss'
import Head from 'next/head'
import { BackButton } from '@/components/BackButton'

export async function getServerSideProps() {
  const fs = require('fs')
  const blogsData = fs.readFileSync('public/data/blogs.json', 'utf8')
  const blogs = JSON.parse(blogsData)

  return {
    props: {
      blogs
    }
  }
}

export default function Blog({ blogs }: any) {
  const router = useRouter()
  const blog = blogs.data.find(({ id }: any) => id === Number(router.query.id))
  const otherBlog = blogs.data.filter(({ id }: any) => id !== Number(router.query.id))

  return (
    <main>
      <Head>
        <title>{blog?.title}</title>
      </Head>
      <section className="project__wrapper">
        <BackButton />
        {blog !== null && (
          <div className="project-main__wrapper">
            <h1 className={styles.h1}>{blog.title}</h1>
            <div className="project-main__image">
              <Image
                src={blog.image}
                height={400}
                width={600}
                alt={blog?.title}
              />
            </div>
            {blog !== null &&
              blog !== undefined &&
              blog.description.map((text: string, index: number) => {
                return (
                  <>
                    <p key={index}>{text}</p> <br />
                  </>
                )
              })}
          </div>
        )}
      </section>
      <SectionContacts />
    </main>
  )
}
