import Link from 'next/link'
import './SectionWorks.scss'

const SectionWorks = () => {
  return (
    <section className="section-works">
      <div className="section-works__card">
        <h3>Я разрабатываю проекты</h3>
        <p>Проекты с открытым исходным кодом , веб-приложения и эксперименты</p>

        <Link href={'/projects'}>Посмотреть мои работы</Link>
      </div>
      <div className="section-works__card">
        <h3>Иногда я пишу</h3>
        <p>О проблемах с которыми сталкиваюсь в фронтенд разработке</p>

        <Link href={'/blogs'}>Читать мои статьи</Link>
      </div>
    </section>
  )
}

export { SectionWorks }
