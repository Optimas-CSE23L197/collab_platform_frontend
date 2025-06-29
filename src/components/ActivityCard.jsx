import React from 'react';

function ActivityCard({ title, description, time, status }) {
    const getStatusStyle = (status) => {
        switch (status) {
            case 'completed':
                return 'bg-green-500';
            case 'pending':
                return 'bg-yellow-500';
            case 'active':
                return 'bg-indigo-500';
            case 'failed':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div className='w-full flex items-center justify-between bg-white shadow-md rounded-xl p-4 mb-3'>
            <div className="activity_content flex flex-col gap-1">
                <h2 className='text-lg font-semibold text-gray-800'>{title}</h2>
                <p className='text-sm text-gray-600'>{description}</p>
                <p className='text-xs text-gray-500'>{time}</p>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getStatusStyle(status)}`}>
                {status}
            </div>
        </div>
    );
}

export default ActivityCard;
