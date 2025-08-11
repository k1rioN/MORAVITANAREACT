import { useEffect, useState } from 'react'

/**
 * Simple typewriter that types and deletes phrases in a loop.
 * Props:
 *  - phrases: string[]
 *  - typingSpeed?: number (ms per char)
 *  - deletingSpeed?: number
 *  - pause?: number (ms pause at end of word)
 */
export default function Typewriter({ phrases = [], typingSpeed = 50, deletingSpeed = 30, pause = 1200 }) {
  const [index, setIndex] = useState(0)        // phrase index
  const [sub, setSub] = useState('')           // current substring
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!phrases.length) return
    const current = phrases[index % phrases.length]

    if (!deleting) {
      if (sub.length < current.length) {
        const t = setTimeout(() => setSub(current.slice(0, sub.length + 1)), typingSpeed)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setDeleting(true), pause)
        return () => clearTimeout(t)
      }
    } else {
      if (sub.length > 0) {
        const t = setTimeout(() => setSub(current.slice(0, sub.length - 1)), deletingSpeed)
        return () => clearTimeout(t)
      } else {
        setDeleting(false)
        setIndex((i) => (i + 1) % phrases.length)
      }
    }
  }, [phrases, index, sub, deleting, typingSpeed, deletingSpeed, pause])

  return <span>{sub}<span className="inline-block w-[1ch] animate-pulse">|</span></span>
}
