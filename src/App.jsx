import React from 'react'
import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import Landing from './page/Landing'
import Home from './page/Home'
import CreateBook from './page/CreateBook'
import HomeLayout from './layout/HomeLayout'
import Test from './page/Test'

/**
 *  localhost:5173/
 *  localhost:5173/home/create-book
 */

const App = () => {
  return (
    <main>
      <Toaster />
      <Routes>
        <Route index element={<Landing />} />
        <Route path='/home' element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path='create-book' element={<CreateBook />} />
          <Route path='test' element={<Test />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App