import React from 'react'
import Dashboard from '../page/Employee/Dashboard'
import { Route, Routes, } from 'react-router-dom'
import Profile from '../page/Employee/Profile'

function AppRoutes() {
    return (
        <Routes>
            <Route path='/home' element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
    )
}

export default AppRoutes