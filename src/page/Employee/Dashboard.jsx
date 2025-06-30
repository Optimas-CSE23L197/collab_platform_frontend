import React, { createElement } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import { FaRegBuilding } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { FaPeopleGroup, FaRegClock } from "react-icons/fa6";

import CardData from '../../data/Card.json';
import ActivityData from '../../data/Activity.json';
import ActivityCard from '../../components/ActivityCard';
import RoomButton from '../../components/RoomButton';
import Notification from '../../components/Notification';

function Dashboard() {

    const IconArray = {
        FaRegBuilding,
        GrDocumentText,
        FaPeopleGroup,
        FaRegClock
    };

    const roomButtonTitle = [
        "Join Room",
        "Create Room"
    ];

    return (
        <div className="relative flex h-screen w-screen bg-gray-100 overflow-hidden">
            {/* Sidebar with fixed width */}
            <Sidebar />

            {/* Main content area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar name="Animesh Karan" />

                {/* Main dashboard body */}
                <main className="px-4 md:px-6 py-3 overflow-y-auto flex justify-center">
                    <div className="w-full max-w-[1920px] flex flex-col gap-6 h-full">

                        {/* Cards Section */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {
                                CardData.map((card, index) => (
                                    <Card
                                        key={index}
                                        title={card.title}
                                        count={card.count}
                                        icon={createElement(IconArray[card.icon])}
                                    />
                                ))
                            }
                        </div>

                        {/* Activity + Room Sections */}
                        <section className="w-full flex flex-col lg:flex-row gap-6 h-full">
                            {/* Activity Scrollable List */}
                            <div className="flex-1 bg-white rounded-2xl px-6 py-4 overflow-y-auto min-h-[300px] max-h-[430px] shadow-md">
                                {
                                    ActivityData.length > 0 ? (
                                        ActivityData.map((activity, index) => (
                                            <ActivityCard
                                                key={index}
                                                title={activity.title}
                                                description={activity.description}
                                                time={activity.time}
                                                status={activity.status}
                                            />
                                        ))
                                    ) : (
                                        <p className="text-center text-gray-500">No recent activities</p>
                                    )
                                }
                            </div>

                            {/* Quick Actions */}
                            <div className="flex-1 bg-white rounded-2xl px-6 py-4 shadow-xl flex flex-col items-center justify-center gap-5 min-h-[300px]">
                                <h2 className='font-bold text-[22px]'>Quick Actions</h2>
                                <div className='flex items-center justify-center gap-5 flex-wrap'>
                                    {
                                        roomButtonTitle.map((title, index) => (
                                            <RoomButton key={index} title={title} />
                                        ))
                                    }
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>

            {/* <Notification title={"Animesh Karan"} message={"Happy Birthday"}/> */}
        </div>
    );
}

export default Dashboard;
