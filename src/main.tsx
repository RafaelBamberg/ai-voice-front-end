import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Search from './Pages/Search'
import Model from './Pages/Model'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/search/:searchValue?" element={<Search/>}/>
            <Route path="/model/:modelName" element={<Model/>}/>
            {/*<Route path="/Register" element={<Register/>} />*/}
            {/*<Route path="/Plan/${id}" element={<Plan/>}/>*/}
            {/*<Route path="/Tutorial" element={<Tutorial/>}/>*/}
            {/*<Route path="/About" element={<About/>}/>*/}
            {/*<Route path="/Payment" element={<Payment/>}/>*/}
            {/*<Route path="/ForgotPassword" element={<ForgotPassword/>}/>*/}
            {/*<Route path="/Error/404" element={<Error/>}/>*/}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
)