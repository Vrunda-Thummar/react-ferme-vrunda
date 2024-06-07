import './App.css'
import Home from './Pages/Home'
import Newin from './Pages/Newin'
import Produce from './Pages/Produce'
import Footer from './componentes/Footer'
import About from './Pages/About'
import Wishlist from './Pages/Wishlist'
import Login from './Pages/Login'
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
          <Route path='Wishlist' element={<Wishlist/>}></Route>
          <Route path='Login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
