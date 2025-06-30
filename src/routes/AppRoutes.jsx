import React from 'react'
import Dashboard from '../page/Employee/Dashboard'
import { Route, Routes, } from 'react-router-dom'
import Profile from '../page/Employee/Profile'
import Project from '../page/Employee/Project'

function AppRoutes() {
    return (
        <Routes>
            <Route path='/home' element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='project' element={<Project />} />
        </Routes>
    )
}

export default AppRoutes