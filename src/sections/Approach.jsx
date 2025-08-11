import Section from '../components/Section'
import Reveal from '../components/Reveal'

export default function Approach() {
  return (
    <Section id="approach">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <Reveal>
          <div>
            <h2 className="headline text-[clamp(28px,5vw,40px)]">Подход</h2>
            <p className="mt-4 text-slate-600">
              Основа — транзактный анализ (ТА): исследуем эго‑состояния (Родитель–Взрослый–Ребёнок),
              жизненные сценарии и обмен «поглаживаниями», чтобы расширять выбор и контакт.
            </p>
            <ul className="mt-6 grid gap-3 text-slate-700">
              <li className="card px-4 py-3">• Совместная постановка целей</li>
              <li className="card px-4 py-3">• Фокус на «здесь‑и‑сейчас»</li>
              <li className="card px-4 py-3">• Чёткие договорённости и границы</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-3 gap-4">
            {['Родитель', 'Взрослый', 'Ребёнок'].map((e, i) => (
              <div key={i} className="aspect-square rounded-2xl card grid place-items-center text-sm">
                {e}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
