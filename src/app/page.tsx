import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import Download from '@/components/Download/Download'
import Feature from '@/components/Feature/Feature'
import Header from '@/components/Header/Header'
import HeaderHome from '@/components/HeaderHome/HeaderHome'
import Hero from '@/components/Hero/Hero'
import Stats from '@/components/Stats/Stats'


export default function Home() {
  return (
    <section>
      <HeaderHome />
      <Hero />

      <Stats />

      <About />

      <Feature />
      <Contact />
      <Download />



    </section>
  )
}
