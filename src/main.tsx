import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Pages/Login'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path="*" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
)