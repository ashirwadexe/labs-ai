import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';

const App = () => {
  // here we are getting the theme from local storage 
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
    </div>
  )
}

export default App