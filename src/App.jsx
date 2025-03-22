import './index.css'

// Hooks
import { useRef } from 'react'
// Components
import Navbar from './components/Navbar'
// Pages
import Home from './pages/Home'
import Aboutme from './pages/Aboutme'
import Service from './pages/Services'
import Stack from './pages/Stack'
import Contact from './pages/Contact'


function App() {
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const homeRef = useRef(null)
  const aboutMeRef = useRef(null)
  const serviceRef = useRef(null)
  const projectRef = useRef(null)
  const stackRef = useRef(null)
  const contactRef = useRef(null) 

  return (
    <>
          <Navbar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutMeRef={aboutMeRef}
        serviceRef={serviceRef}
        projectRef = {projectRef}
        stackRef={stackRef}
        contactRef={contactRef}     
      />
      <div className='m-auto 2xl:w-[1800px]'>
        
        <div className='m-auto' ref={homeRef}><Home/></div>
        <div className='m-auto h-svh bg-slate-800' ref={aboutMeRef}><Aboutme/></div>
        <div className='m-auto h-svh bg-slate-600' ref={serviceRef}><Service/></div>
        <div className='m-auto h-svh bg-slate-400' ref={projectRef}></div>
        <div className='m-auto h-svh bg-slate-800' ref={stackRef}><Stack/></div>
        <div className='m-auto h-svh bg-slate-900' ref={contactRef}><Contact/></div>
      </div>
    </>
  )
}

export default App
