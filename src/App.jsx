import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { SidebarProvider } from './context/Sidebarcontext'

function App() {
  return (
    <div>
      <SidebarProvider>
        <AppRoutes />
      </SidebarProvider>
    </div>
  )
}

export default App