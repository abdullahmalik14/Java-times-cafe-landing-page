import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import "./Styles/App.css"
import "./Styles/Responsive.css"
import CardDetails from './components/CardDetails'
import Header from './components/Header'
import Footer from './components/Footer'
import NewsLetter from './components/NewsLetter'
const App = () => {
  return (
   <>
    <Header/>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/card_details' element={<CardDetails/>}/>
</Routes>
<NewsLetter/>
<Footer/>
   </>
  )
}

export default App
