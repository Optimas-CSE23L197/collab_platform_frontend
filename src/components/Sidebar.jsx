import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarData from '../data/Sidebar.json';
import SidebarProfile from './SidebarProfile';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdHome } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { VscProject } from 'react-icons/vsc';
import { FaUserGroup } from 'react-icons/fa6';
import { FaTasks } from 'react-icons/fa';
import { FcCollaboration } from 'react-icons/fc';
import { TbLogout2 } from "react-icons/tb";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { useSideBar } from '../context/Sidebarcontext';


// Icon map (functions, not JSX)
const iconArray = {
    home: IoMdHome,
    profile: CgProfile,
    project: VscProject,
    employee: FaUserGroup,
    complaint: FaTasks,
    activity: IoExtensionPuzzleOutline,
    collaboration: FcCollaboration
};

function Sidebar() {

    const { collapsed, toggleSidebar } = useSideBar();

    const defaultRole = 'EMPLOYEE';
    const role = SidebarData.find(item => item.role === defaultRole);

    return (
        <aside
            className={`h-screen transition-all duration-300 ease-in-out bg-gradient-to-b from-indigo-100 to-indigo-200 
                  ${collapsed ? 'w-[7%]' : 'w-[18%]'} border-r-2 border-indigo-500 shadow-xl flex flex-col justify-between rounded-tr-3xl rounded-br-3xl`}
        >
            {/* Top Section */}
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    {!collapsed && <h1 className="text-xl font-bold text-indigo-600">Collabouration</h1>}
                    <button onClick={toggleSidebar} aria-label="Toggle sidebar">
                        <GiHamburgerMenu className="text-[26px] text-indigo-600 cursor-pointer" />
                    </button>
                </div>

                {/* Profile */}
                {collapsed ? (
                    <SidebarProfile />
                ) : (
                    <SidebarProfile name="Animesh Karan" role="EMPLOYEE" />
                )
                }

                {/* Navigation */}
                <nav className="mt-6 flex flex-col gap-2">
                    {role?.menus.map((menu, index) => {
                        const Icon = iconArray[menu.icon] || IoMdHome;
                        return (
                            <NavLink
                                to={menu.link}
                                key={index}
                                title={collapsed ? menu.name : ''}
                                className={({ isActive }) =>
                                    `group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${collapsed ? 'flex justify-center items-center' : ''}
                                        ${isActive
                                        ? 'bg-indigo-500 text-white shadow-lg'
                                        : 'text-indigo-700 hover:bg-indigo-300 hover:text-white'}`
                                }
                            >
                                <Icon className={`transition-all duration-200 ${collapsed ? 'text-[28px]' : 'text-[23px]'}`} />
                                {!collapsed && <span className="font-medium text-[19px]">{menu.name}</span>}
                            </NavLink>
                        );
                    })}
                </nav>
            </div>

            {/* Logout */}
            <div className="p-4">
                <NavLink
                    to="/logout"
                    title={collapsed ? 'Logout' : ''}
                    className={`flex items-center justify-center gap-3 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl 
                    transition-all duration-200 ${collapsed ? 'px-0' : 'px-4'}`}
                >
                    {!collapsed ? 'Logout' : <span className="text-[20px]"><TbLogout2 /></span>}
                </NavLink>
            </div>
        </aside>
    );
}

export default Sidebar;
