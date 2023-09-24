import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Search from './Pages/Search'
import Model from './Pages/Model'
import Register from './Pages/Register'
import ForgotPassword from './Pages/ForgotPassword'
import './index.css'
import CartProvider from './context/CartProvider'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/search/:searchValue?" element={<Search/>}/>
            <Route path="/model/:modelName" element={<Model/>}/>
            <Route path="/register" element={<Register/>} />
            <Route path="/forgotPassword/:token" element={<ForgotPassword/>}/>
            {/*<Route path="/Tutorial" element={<Tutorial/>}/>*/}
            {/*<Route path="/About" element={<About/>}/>*/}
            {/*<Route path="/Plan/${id}" element={<Plan/>}/>*/}
            {/*<Route path="/Payment" element={<Payment/>}/>*/}
            {/*<Route path="*" element={<Error/>}/>*/}
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </React.StrictMode>
)