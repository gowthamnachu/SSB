import {
  Navbar,
  Footer,
  Hero,
  Metrics,
  Services,
  About,
  Projects,
  WhyChooseUs,
  Contact,
  ScrollToTop
} from '@/components'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Metrics />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
