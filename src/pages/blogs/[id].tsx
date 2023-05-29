import Image from 'next/image'
import { useRouter } from 'next/router'
import { SectionContacts } from '@/components/SectionContacts'
import { BlogTitleCard } from '@/components/Blogs/BlogTitleCard'
import '@/styles/pages/blog.scss'
import Head from 'next/head'

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
      <section className="blog__wrapper">
        {blog !== null && blog !== undefined ? <BlogTitleCard {...blog} /> : null}

        <div className="blog__contant">
          <p>{blog?.text ?? ''}</p>
          <div className="blog__other-blogs">
            <h3>Другие статьи</h3>
            {otherBlog.map((blog: any) => {
              return (
                <div
                  key={blog.id}
                  className="other-blog__card"
                >
                  <Image
                    src={blog.image ?? ''}
                    width={60}
                    height={60}
                    alt="my-photo"
                    priority
                  />
                  <p>{blog.title}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <SectionContacts />
    </main>
  )
}
