import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { useForm } from 'react-hook-form'

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      name: '',
      contactMethod: 'telegram', // 'telegram' | 'phone'
      telegram: '',
      phone: '',
      message: '',
    },
  })

  const contactMethod = watch('contactMethod')

  const onSubmit = async (data) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.ok) {
        alert('Спасибо! Ваша заявка отправлена.')
        reset()
      } else {
        alert('Не удалось отправить заявку. Попробуйте позже.')
      }
    } catch {
      alert('Сетевая ошибка. Попробуйте позже.')
    }
  }

  // Регэкс ника: позволяет @, 5–32 символов [a-zA-Z0-9_]
  const tgPattern = /^@?[a-zA-Z0-9_]{5,32}$/

  return (
    <Section id="contact">
      <div className="grid lg:grid-cols-2 gap-10">
        <Reveal>
          <div className="card p-6">
            <h2 className="headline text-[clamp(24px,4vw,32px)]">Запись на сессию</h2>
            <p className="mt-3 text-slate-600">
              Заполните форму — я свяжусь с вами (Telegram или телефон).
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid gap-4">

              <label className="block">
                <span className="text-sm text-slate-600">Ваше имя</span>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-200"
                  placeholder="Иван Иванов"
                  {...register('name', { required: 'Пожалуйста, укажите имя', minLength: { value: 2, message: 'Слишком короткое имя' } })}
                />
                {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
              </label>

              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm text-slate-600">Связаться через</span>
                  <select
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-200"
                    {...register('contactMethod')}
                  >
                    <option value="telegram">Telegram</option>
                    <option value="phone">Телефон</option>
                  </select>
                </label>

                {contactMethod === 'telegram' ? (
                  <label className="block">
                    <span className="text-sm text-slate-600">Ник в Telegram</span>
                    <input
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-200"
                      placeholder="@username"
                      {...register('telegram', {
                        required: 'Укажите ник в Telegram',
                        pattern: { value: tgPattern, message: 'Неверный формат ника' },
                      })}
                    />
                    {errors.telegram && <span className="text-xs text-red-500">{errors.telegram.message}</span>}
                  </label>
                ) : (
                  <label className="block">
                    <span className="text-sm text-slate-600">Телефон</span>
                    <input
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-200"
                      type="tel"
                      inputMode="tel"
                      placeholder="+7 (999) 123-45-67"
                      {...register('phone', { required: 'Укажите номер телефона' })}
                    />
                    {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                  </label>
                )}
              </div>

              <label className="block">
                <span className="text-sm text-slate-600">Сообщение</span>
                <textarea
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-200 resize-vertical"
                  rows={6}
                  placeholder="Коротко опишите запрос или удобное время связи…"
                  {...register('message', { required: 'Пожалуйста, добавьте сообщение', minLength: { value: 10, message: 'Чуть подробнее, пожалуйста' } })}
                />
                {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
              </label>

              <div className="flex items-center gap-3">
                <button disabled={isSubmitting} type="submit" className="btn-primary">
                  {isSubmitting ? 'Отправка…' : 'Отправить заявку'}
                </button>
                {isSubmitSuccessful && <span className="text-sm text-green-600">Отправлено!</span>}
              </div>
            </form>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-4">
            <div className="card p-6">
              <h3 className="font-semibold">Контакты</h3>
              <p className="text-slate-600 mt-2">Telegram: @Moravitana</p>
              <p className="text-slate-600">Телефон: 8 (926) 591-71-94</p>
              <p className="text-slate-600">Где: онлайн либо в комфортном кабинете в г. Москва</p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold">Важно знать</h3>
              <ul className="mt-2 text-slate-600 list-disc pl-5 space-y-1">
                <li>Конфиденциальность сессий</li>
                <li>Прозрачная политика отмены</li>
                <li>Бережное сопровождение для первой сессии</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
