import './SectionAbout.scss'

import Image from 'next/image'
import Link from 'next/link'

function SectionAbout({ title, imagePath }) {
  // const { t } = useTranslation();

  return (
    <section id='main' className='section-about__wrapper'>
      <div className='section-about__titles'>

        <h1>{title}</h1>
      </div>
      <div className='section-about__illustration'>
        <Image
          className='illustration__avatar'
          src={imagePath}
          alt='my-photo'
          width={229}
          height={254}
          priority
        />
      </div>
    </section>
  )
}

export { SectionAbout }
