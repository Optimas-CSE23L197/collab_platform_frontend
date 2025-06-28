import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SidebarData from '../data/Sidebar.json';
import SidebarProfile from './SidebarProfile';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdHome, IoMdPerson, IoMdBriefcase, IoMdPeople, IoMdWarning, IoMdChatbubbles } from "react-icons/io";

// Map icon keys to actual JSX components
const iconArray = {
    home: <IoMdHome />,
    profile: <IoMdPerson />,
    project: <IoMdBriefcase />,
    employee: <IoMdPeople />,
    complaint: <IoMdWarning />,
    collaboration: <IoMdChatbubbles />
};

function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const defaultRole = 'EMPLOYEE';
    const role = SidebarData.find(item => item.role === defaultRole);

    const toggleSidebar = () => setCollapsed(prev => !prev);

    return (
        <aside
            className={`${collapsed ? 'w-[7%]' : 'w-[20%]'
                } h-screen bg-gray-200 border-r-2 border-indigo-600 rounded-xl flex flex-col justify-between p-4 transition-all duration-300`}
        >
            {/* Hamburger Toggle */}
            <div className="flex justify-end mb-4">
                <button onClick={toggleSidebar}>
                    <GiHamburgerMenu className="text-[28px] text-indigo-600" />
                </button>
            </div>

            {/* Profile and Navigation */}
            <div>
                {!collapsed && <SidebarProfile name="Animesh Karan" role="EMPLOYEE" />}

                <nav className="flex flex-col gap-3 mt-6">
                    {role?.menus.map((menu, index) => (
                        <NavLink
                            to={menu.link}
                            key={index}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${isActive
                                    ? 'bg-indigo-500 text-white shadow-md'
                                    : 'text-indigo-700 hover:bg-indigo-100 hover:border-r-4 hover:border-indigo-500 flex items-center justify-center'
                                }`
                            }
                            title={collapsed ? menu.name : undefined}
                        >
                            <span className="text-[20px] flex items-center justify-center">
                                {iconArray[menu.icon] || <IoMdHome />}
                            </span>
                            {!collapsed && <span>{menu.name}</span>}
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* Logout Button */}
            <NavLink
                to="/logout"
                className={`${collapsed ? 'text-[0px] h-0 overflow-hidden' : 'block'
                    } w-full bg-red-500 px-5 py-3 text-center text-white font-semibold text-[17px] rounded-xl hover:bg-red-600 hover:shadow-lg transition-all duration-200`}
            >
                Logout
            </NavLink>
        </aside>
    );
}

export default Sidebar;
