import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <SidebarContext.Provider value={{ collapsed, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSideBar = () => {
    const ctx = useContext(SidebarContext);

    if (!ctx) throw new Error("useSideBar must be used within a SidebarProvider");

    return ctx;
}