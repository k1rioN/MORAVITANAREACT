import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { motion } from 'framer-motion'

const services = [
  { title: 'Индивидуальная терапия', desc: '50–60 минут • [Стоимость]', icon: '🧩' },
  { title: 'Парная терапия', desc: '70–90 минут • [Стоимость]', icon: '💞' },
  { title: 'Краткосрочная фокусная', desc: '6–8 сессий • работа с целью', icon: '🎯' },
  { title: 'Онлайн‑сессии', desc: 'Zoom/Meet • гибкий график', icon: '💻' },
  { title: 'Родительское консультирование', desc: 'Инструменты ТА для семьи', icon: '👨‍👩‍👧' },
  { title: 'Группы и мастер‑классы', desc: 'Обучение в малых группах', icon: '📚' },
]

export default function Services() {
  return (
    <Section id="services">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="headline text-[clamp(28px,5vw,40px)]">Услуги</h2>
        <p className="mt-3 text-slate-600">Чёткая структура и бережное сопровождение.</p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <Reveal delay={i * 0.04} key={s.title}>
            <motion.div whileHover={{ y: -4 }} className="card p-6 h-full flex flex-col">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
              <div className="mt-auto pt-4">
                <a href="#contact" className="btn-outline">Узнать о доступности</a>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
