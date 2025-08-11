import { motion, AnimatePresence } from 'framer-motion'
export default function Preloader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-6">
            <motion.div className="size-16 rounded-full"
              style={{ background: 'conic-gradient(from 0deg, #c7d2fe, #e9d5ff, #c7d2fe)' }}
              animate={{ rotate: 360 }} transition={{ ease: 'linear', duration: 1.1, repeat: Infinity }} />
            <p className="text-sm text-slate-500">Загружаем сайт…</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
