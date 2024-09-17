import Page_Inicio from './Components/Inicio'
import Page_Producto from './Components/Producto'
import Page_Nosotros from './Components/Nosotros'
import Page_Info from './Components/Informacion'
import Carrucela from './Components/Carrucel'
import Select from './Components/Producto_Select'


import Navbar from './Components/Navbar'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<Page_Inicio/>}/>
          <Route path='/Productos' element={<Page_Producto/>}/>
          <Route path='/Nosotros' element={<Page_Nosotros/>}/>
          <Route path='/Informacion' element={<Page_Info/>}/>
          <Route path='/Carrucel' element={<Carrucela/>}/>
          <Route path='/Item' element={<Select/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
