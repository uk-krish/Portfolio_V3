import { useState } from 'react'
import Home from './pages/Home'
import CircleTop from './components/CircleTop'
import CircleBottom from './components/CircleBottom'
import Navabar from './components/Navabar'
import SocialMedia from './components/SocialMedia'
function App() {

  return (
    <div className=''>
      <CircleTop />
      <CircleBottom />
      <SocialMedia/>
      <Navabar />
      <Home/>
    </div>
  )
}

export default App
