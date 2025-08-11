import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } })
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  )
}
