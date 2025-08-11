import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Approach from '../sections/Approach'
import Testimonials from '../sections/Testimonials'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Approach />
      <Testimonials />
      <Contact />
    </main>
  )
}
