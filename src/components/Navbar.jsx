import React from 'react';
import { IoNotifications } from "react-icons/io5";

function Navbar({ name = "User" }) {
    const date = new Date().toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    return (
        <nav className="w-full h-[15%] px-4">
            <div className="nav_wrapper bg-indigo-500 text-white h-full w-full flex items-center justify-between px-6 rounded-b-2xl shadow-md">

                <div className="message space-y-1">
                    <h1 className="text-xl font-semibold">Welcome back, {name}</h1>
                    <span className="text-sm opacity-80">{date}</span>
                </div>

                <div className="flex items-center gap-4">
                    <div className="notification bg-white p-3 rounded-full shadow-lg relative">
                        <IoNotifications className="text-[26px] text-indigo-500" />
                        {/* Optional: badge dot */}
                        <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
