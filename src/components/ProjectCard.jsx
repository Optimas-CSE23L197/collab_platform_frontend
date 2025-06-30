import React from 'react';
import { GrProjects } from "react-icons/gr";
import { IoEye } from "react-icons/io5";
import { FaUserTie, FaUsers, FaBuilding, FaCalendarAlt, FaFlagCheckered, FaChartLine } from "react-icons/fa";

function ProjectCard({
    title = "AI Chatbot System",
    description = "An internal chatbot for automating HR queries.",
    department = "Information Technology",
    members = 8,
    manager = "Animesh Karan",
    status = "Ongoing",
    startDate = "2024-02-01",
    endDate = "2024-12-31",
    progress = 65
}) {
    return (
        <div className='w-full bg-white rounded-2xl shadow-2xl hover:shadow-xl transition-all'>
            <div className="p-5 space-y-4">
                {/* Header */}
                <div className="flex items-center gap-2 text-xl font-semibold text-indigo-600">
                    <GrProjects className='text-xl' />
                    <h2>{title}</h2>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600">{description}</p>

                {/* Project Info */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                        <FaBuilding />
                        <span>{department}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaUsers />
                        <span>{members} Members</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaUserTie />
                        <span>{manager}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaChartLine />
                        <span>{status}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCalendarAlt />
                        <span>{startDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaFlagCheckered />
                        <span>{endDate}</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div>
                    <p className='text-sm text-gray-500 mb-1'>Progress</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-indigo-600 h-2.5 rounded-full transition-all"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <p className="text-right text-xs mt-1 text-gray-500">{progress}%</p>
                </div>

                {/* Button */}
                <div className="flex items-center justify-center gap-2 pt-3">
                    <IoEye className="text-lg text-indigo-500" />
                    <a href="#" className="text-indigo-600 font-medium hover:underline">Enter Room</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
