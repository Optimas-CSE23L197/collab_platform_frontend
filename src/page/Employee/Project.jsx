import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import ProjectCard from '../../components/ProjectCard';

function Project() {
    const role = "HOD";

    const dummyProjects = [
        {
            title: "AI Chatbot System",
            description: "Automates HR queries using natural language.",
        },
        {
            title: "Inventory Management",
            description: "Track and manage warehouse goods efficiently.",
        },
        {
            title: "Student Feedback Portal",
            description: "Portal for collecting and analyzing feedback.",
        },
        {
            title: "Internal Mail System",
            description: "Streamlines internal office communication.",
        },
        {
            title: "Employee Attendance Tracker",
            description: "Tracks employee check-in/check-out records.",
        },
    ];

    return (
        <div className="relative flex h-screen w-screen bg-gray-100 overflow-hidden">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar name="Animesh Karan" />

                <main className="px-4 md:px-6 py-4 overflow-y-auto flex flex-col">
                    {/* Header */}
                    <section className="project_content flex flex-col sm:flex-row w-full justify-between items-start sm:items-center gap-4">
                        <div className="project_text">
                            <h2 className="text-2xl font-semibold text-gray-800">Project Room</h2>
                            <p className="text-sm text-gray-600">Manage your assigned projects</p>
                        </div>

                        <div className="project_button">
                            {
                                ["CLERK", "HOD"].includes(role) ? (
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600">
                                        Create Project
                                    </button>
                                ) : (
                                    <button className="bg-gray-500 text-white px-4 py-2 rounded cursor-not-allowed" disabled>
                                        Create Project
                                    </button>
                                )
                            }
                        </div>
                    </section>

                    {/* Cards Grid */}
                    <section className="mt-8 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {
                            dummyProjects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    title={project.title}
                                    description={project.description}
                                />
                            ))
                        }
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Project;
