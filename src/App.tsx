import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Header from './components/header/header.component'
import { Main } from './components/main/main.component'

function App() {

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
