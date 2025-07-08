import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from "./components/home/HomePage"
import NotFoundPage from './components/ui/NotFoundPage'

export default function App(){
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}


