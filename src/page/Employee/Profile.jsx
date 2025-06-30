import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { FaEdit } from "react-icons/fa";

function Profile() {
    const time = new Date().toLocaleDateString();

    return (
        <div className="relative flex h-screen w-screen bg-gray-100 overflow-hidden">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar name='Animesh Karan' />

                <main className="px-4 md:px-6 py-4 overflow-y-auto w-full">
                    {/* Header */}
                    <section>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-5 gap-4">
                            <div>
                                <h2 className='font-bold text-3xl text-gray-800'>Personal Settings</h2>
                                <p className='text-sm text-gray-600'>Manage your personal information and account settings</p>
                            </div>

                            <button className="bg-black text-white px-5 py-2 gap-2 flex items-center rounded-xl hover:bg-gray-800">
                                <FaEdit className='text-lg' />
                                <span className='text-base font-semibold'>Edit Profile</span>
                            </button>
                        </div>
                    </section>

                    {/* Profile Info Section */}
                    <section className='mt-8 flex flex-col lg:flex-row gap-6 w-full'>
                        <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-1/3">
                            <h3 className="text-lg font-semibold mb-2">Profile Card</h3>
                            <p className="text-sm text-gray-600">[Placeholder for avatar, name, role, etc.]</p>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-2/3">
                            <h3 className="text-lg font-semibold mb-2">Profile Information</h3>
                            <p className="text-sm text-gray-600">[Placeholder for email, phone, DOB, etc.]</p>
                        </div>
                    </section>

                    {/* Security Section */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Security Settings</h2>
                        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <div>
                                <h3 className="text-base font-medium text-gray-800">Password</h3>
                                <p className="text-sm text-gray-500">Last updated on {time}</p>
                            </div>
                            <a href="#" className="text-indigo-600 font-medium text-sm mt-3 sm:mt-0 hover:underline">
                                Change Password
                            </a>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Profile;
