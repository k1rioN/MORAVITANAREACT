export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/70">
      <div className="container py-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Психолог (транзактный аналитик).</p>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#home" className="hover:opacity-70">Главная</a>
          <a href="#services" className="hover:opacity-70">Услуги</a>
          <a href="#contact" className="hover:opacity-70">Контакты</a>
        </nav>
      </div>
    </footer>
  )
}
