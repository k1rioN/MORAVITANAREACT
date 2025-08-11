import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Typewriter from '../components/Typewriter'

export default function About() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <div className="aspect-[4/3] rounded-2xl card overflow-hidden">
            <img
              src="/cabinet.jpg"
              alt="Интерьер кабинета психолога"
              className="w-full h-full object-cover object-left"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <h2 className="headline text-[clamp(28px,5vw,40px)]">О специалисте</h2>
            <p className="mt-4 text-slate-600">
              Бережный стиль, прозрачные договорённости, поддержка в темпе клиента.
            </p>
            <ul className="mt-6 grid gap-3 text-slate-700">
              <li className="card px-4 py-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">• Сертификация: Транзактный анализ</li>
              <li className="card px-4 py-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">• Темы: тревога, отношения, самооценка</li>
              <li className="card px-4 py-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">• Формат: очно / онлайн</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
