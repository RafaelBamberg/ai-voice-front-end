import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path="*" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
)