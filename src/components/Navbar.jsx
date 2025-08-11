import { useEffect, useState } from 'react'
import { clsx } from 'clsx'

const links = [
  { href: '#home', label: 'Главная' },
  { href: '#about', label: 'О специалисте' },
  { href: '#services', label: 'Услуги' },
  { href: '#approach', label: 'Подход' },
  { href: '#testimonials', label: 'Отзывы' },
  { href: '#contact', label: 'Контакты' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    if (!open) return
    const onHash = () => setOpen(false)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [open])

  return (
    <div className={clsx('fixed top-0 inset-x-0 z-50 transition-all safe', scrolled ? 'py-2' : 'py-3')}>
      <div className={clsx('mx-auto container rounded-2xl px-4', scrolled ? 'glass' : 'bg-white/40 backdrop-blur-md border border-slate-200/60')}>
        <div className="flex items-center justify-between h-14">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <img src="/logo.svg" alt="logo" className="w-8 h-8"/>
            <span>MORAVITANA</span>
          </a>
          <nav className="hidden md:flex items-center gap-x-6 gap-y-2 text-sm flex-wrap">
            {links.map(l => <a key={l.href} href={l.href} className="hover:opacity-70">{l.label}</a>)}
            <a href="#contact" className="btn-primary text-xs">Записаться</a>
          </nav>
          <button onClick={() => setOpen(v => !v)} className="md:hidden btn-outline text-sm">
            {open ? 'Закрыть' : 'Меню'}
          </button>
        </div>
        {open && (
          <div className="md:hidden overflow-hidden border-t border-slate-200">
            <div className="py-2 flex flex-col">
              {links.map(l => <a key={l.href} href={l.href} className="py-3">{l.label}</a>)}
              <a href="#contact" className="btn-primary my-2">Записаться</a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
