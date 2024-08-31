import Header from './sections/Header'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Interests from './sections/Interests'
import Footer from './sections/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Skills />
          <Projects />
          <Interests />
        </div>
      </main>
      <Footer />
    </div>
  )
}
