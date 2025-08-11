export default function Section({ id, children, className }) {
  return (
    <section id={id} className={`py-20 ${className || ''}`}>
      <div className="container">{children}</div>
    </section>
  )
}
