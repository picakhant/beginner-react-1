import React from 'react'
import Navbar from './components/Navbar'
import UploadBook from './components/UploadBook'
import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <main>

      <Toaster/>
      
      <Navbar />

      <UploadBook />
    </main>
  )
}

export default App