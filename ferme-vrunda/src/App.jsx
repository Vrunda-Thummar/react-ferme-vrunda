import './App.css'
import Home from './Pages/Home'
import Newin from './Pages/Newin'
import Produce from './Pages/Produce'
import Footer from './componentes/Footer'
import About from './Pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='Newin' element={<Newin/>}></Route>
          <Route path='Produce' element={<Produce/>}></Route>
          <Route path='About' element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
