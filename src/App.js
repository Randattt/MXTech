import classes from './App.module.css'
import Navigation from './components/Navigation/Navigation'
import Welcome from './components/Welcome/Welcome'
import Slogan from './components/Slogan/Slogan'
import Products from './components/Products/Products'
import Stack from './components/Stack/Stack'
import Values from './components/Values/Values'
import Years from './components/Years/Years'
import Connect from './components/Connect/Connect'
import Bundle from './components/Bundle/Bundle'
import React, { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const menuBundle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={classes.App}>
      <Bundle menuBundle={menuBundle} isOpen={isOpen} />
      <Navigation menuBundle={menuBundle} isOpen={isOpen} />
      <Welcome />
      <Slogan />
      <Products />
      <Stack />
      <Values />
      <Years />
      <Connect />
    </div>
  )
}

export default App
