import React from 'react'
import { Toaster } from "react-hot-toast"
import UploadBook from './components/UploadBook'


const App = () => {
  return (
    <main>
      <Toaster />
      <UploadBook/>
    </main>
  )
}

export default App