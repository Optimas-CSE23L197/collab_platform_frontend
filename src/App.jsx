import React from 'react'
import Dashboard from './page/Employee/Dashboard'
import { Route, Routes, } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/home' element={<Dashboard />} />
    </Routes>
  )
}

export default App