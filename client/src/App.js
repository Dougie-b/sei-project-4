import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './components/auth/Login'
import Register from './components/auth/Register'
import GunSelect from './components/pages/GunSelect'
import { Home } from './components/Home'
import { SiteNavBar } from './components/SiteNavbar'
import { Randomiser } from './components/pages/Randomiser'
import AttachmentSelect from './components/pages/AttachmentSelect'


function App() {
    return (
        <div className="site-wrapper">
            <BrowserRouter>
                <SiteNavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="gunselect" element={<GunSelect />} />
                    <Route path="attachmentselect/:gunId" element={<AttachmentSelect />} />
                    <Route path="randomiser" element={<Randomiser />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App