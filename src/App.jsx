import React from 'react'
import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import Landing from './page/Landing'
import About from './page/About'
import Contact from './page/Contact'
import DevContact from './page/DevContact'
import CompanyContact from './page/CompanyContact'

const App = () => {
  return (
    <main>
      <Toaster />

      <Routes>
        <Route index element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact/dev' element={<DevContact />} />
        <Route path='/contact/company' element={<CompanyContact />} />
      </Routes>
    </main>
  )
}

export default App