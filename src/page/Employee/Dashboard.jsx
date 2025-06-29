import React, { createElement } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import { FaRegBuilding } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";



//json file
import CardData from '../../data/Card.json';
import ActivityData from '../../data/Activity.json'
import ActivityCard from '../../components/ActivityCard';
import RoomButton from '../../components/RoomButton';


function Dashboard() {

    const IconArray = {
        FaRegBuilding: FaRegBuilding,
        GrDocumentText: GrDocumentText,
        FaPeopleGroup: FaPeopleGroup,
        FaRegClock: FaRegClock
    }

    const roomButtonTitle = [
        "Join Room",
        "Create Room"
    ];

    return (
        <div className="flex h-screen w-screen bg-gray-100 overflow-hidden">
            {/* Sidebar with fixed width */}
            <Sidebar />

            {/* Main content area */}
            <div className="flex-1 flex flex-col">
                <Navbar name="Animesh Karan" />

                {/* Main dashboard body */}
                <main className="px-6 py-3 overflow-y-auto flex justify-center">
                    <div className="w-full max-w-[1920px] flex flex-col gap-6">

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
                        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="max-h-[430px] bg-white rounded-2xl px-6 py-4 overflow-y-scroll">
                                {
                                    ActivityData.map((activity, index) => (
                                        <ActivityCard
                                            key={index}
                                            title={activity.title}
                                            description={activity.description}
                                            time={activity.timestamp}
                                            status={activity.status}
                                        />
                                    ))
                                }
                            </div>

                            <div className="bg-white rounded-2xl px-6 py-4 shadow-xl flex flex-col items-center justify-center gap-5 min-h-[300px]">
                                <h2 className='font-bold text-[22px] '>Quick Actions</h2>
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
        </div>
    );
}

export default Dashboard;
