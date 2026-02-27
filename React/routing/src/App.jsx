import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Products from './components/Products'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import User from './components/User'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/user" element={<Navigate to="/user/1" replace />} />
      <Route path='/user/:id' element={<User />} />
      <Route path='/about' element={<About/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/products' element={<Products/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App