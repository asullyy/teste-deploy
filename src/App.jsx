
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/teste-deploy" element={<Home/>}/>
          <Route path="/teste-deploy/About" element={<About/>}/>
          <Route path="/teste-deploy/Contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
