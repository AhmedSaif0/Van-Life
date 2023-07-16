import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVansDetails from './pages/Host/HostVansDetails';
import Dashbord from './pages/Host/Dashbord'
import "./server"
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
  
  <BrowserRouter>
    <Routes>
      <Route element={<Layout/>} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail/>} />

            <Route path='/host' element={<HostLayout/>}>
              <Route index element={<Dashbord/>}/>
              <Route path="income" element={<Income/>}/>
              <Route path="Vans" element={<HostVans/>}/>
              <Route path="Vans/:id" element={<HostVansDetails/>}/>
              <Route path="Reviews" element={<Reviews/>}/>
            </Route>
      </Route>
    </Routes>
  </BrowserRouter>

  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);