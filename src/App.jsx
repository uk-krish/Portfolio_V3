import { useState } from 'react'
import Home from './pages/Home'
import CircleTop from './components/CircleTop'
import CircleBottom from './components/CircleBottom'
import Navabar from './components/Navabar'
import SocialMedia from './components/SocialMedia'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import VerticalEmail from './components/VerticalEmail'
function App() {

  return (
    <div className='select-none'>
      <SocialMedia/>
      <Navabar />
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
