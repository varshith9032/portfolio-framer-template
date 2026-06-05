import { useEffect } from 'react'
import { useContent } from './context/ContentContext'
import { applyTheme } from './data/themes'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ContentEditor, { EditFab } from './components/ContentEditor'

export default function App() {
  const { site, theme } = useContent()

  useEffect(() => {
    document.title = `${site.name} — Portfolio`
    applyTheme(theme)
  }, [site.name, theme])

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <EditFab />
      <ContentEditor />
    </>
  )
}
