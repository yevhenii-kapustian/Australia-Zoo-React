import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Mammals from './pages/Mammals'
import Reptiles from './pages/Reptiles'
import Birds from './pages/Birds'
import AnimalDetails from './components/AnimalDetails'
import { useState } from 'react'

function App() {

  const [currentPage, setCurrentPage] = useState("home");
 
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout currentPage={currentPage}/>}>
        <Route index element={<Home setCurrentPage={setCurrentPage}/>} />
        <Route path='/mammals' element={<Mammals setCurrentPage={setCurrentPage}/>}/>
        <Route path='/reptiles' element={<Reptiles setCurrentPage={setCurrentPage}/>}/>
        <Route path='/birds' element={<Birds setCurrentPage={setCurrentPage}/>}/>
        <Route path='/:group/:name' element={<AnimalDetails/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
