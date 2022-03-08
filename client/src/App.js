import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './components/auth/Login'
import Register from './components/auth/Register'
import GunList from './components/test/GunList'


function App() {
    return (
        <div className="site-wrapper">
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Home />} /> */}
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="gunlist" element={<GunList />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App