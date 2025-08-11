import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Typewriter from '../components/Typewriter'

export default function Hero() {
  return (
    <Section id="home" className="pt-28">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <h1 className="headline text-[clamp(28px,5vw,48px)] leading-tight">
            <span className="block">Моравская Татьяна</span>
            <span className="block text-slate-600 text-[clamp(16px,2.2vw,24px)] mt-3">Транзактный аналитик</span>
            <div className="mt-2 text-slate-500 text-[clamp(14px,2vw,20px)]">
              <Typewriter phrases={['Бережно и конфиденциально', 'Поддержка в вашем темпе', 'Онлайн и очно']} />
            </div>
          </h1>
          <p className="mt-6 text-slate-600 max-w-xl">
            Изменяясь сами, мы меняем не только качество своей жизни, но также влияем на мировоззрение и будущее своих детей, близких, передавая им новые навыки, новый позитивный опыт, свое новое отношение к жизни.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">Записаться</a>
            <a href="#services" className="btn-outline">Посмотреть услуги</a>
          </div>
          <ul className="mt-10 grid grid-cols-3 gap-4 max-w-lg text-sm">
            {['Спокойно', 'Конфиденциально', 'Научно обосновано'].map((t, i) => (
              <li key={i} className="card px-4 py-4 text-center flex items-center justify-center min-h-[64px]">{t}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card overflow-hidden max-w-[560px] md:ml-auto">
            <div className="w-full aspect-[4/5] grid place-items-center bg-gradient-to-br from-indigo-50 to-violet-50">
              <img
                src="/person-main.jpg"
                alt="Фотография психолога"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Reveal>

      </div>
    </Section>
  )
}
