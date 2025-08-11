import Section from '../components/Section'
import Reveal from '../components/Reveal'

const t = [
  { q: 'Я чувствовал(а) поддержку и ясные ориентиры. Спокойная атмосфера с первой минуты.', a: '[Клиент, заглушка]' },
  { q: 'Бережно, но структурно. Мы поставили достижимые цели и отмечали маленькие шаги.', a: '[Клиент, заглушка]' },
  { q: 'Пастельная эстетика усиливает ощущение тепла и присутствия.', a: '[Клиент, заглушка]' },
]

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="headline text-[clamp(28px,5vw,40px)]">Отзывы</h2>
        <p className="mt-3 text-slate-600">Что говорят клиенты.</p>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {t.map((item, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <blockquote className="card p-6 text-slate-700">
              <p>“{item.q}”</p>
              <footer className="mt-4 text-sm text-slate-500">— {item.a}</footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
