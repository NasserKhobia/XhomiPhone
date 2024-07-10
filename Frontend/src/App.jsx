import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './page/Home'
import Product from './page/Product'

function App() {

  return (
    <>
      <div>
        <Home/>
        <Product/>
      </div>
    </>
  )
}

export default App
