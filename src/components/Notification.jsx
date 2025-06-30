import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";

function Notification({ title, message, linkText = "View Details", linkTo = "#", onClose }) {
    return (
        <div className='global_notification fixed bottom-5 right-5 z-50 min-w-[300px] max-w-sm bg-white shadow-xl rounded-2xl p-5 border border-gray-200'>
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold text-gray-800">Notification</h2>
                {onClose && (
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <IoMdClose size={20} />
                    </button>
                )}
            </div>

            <div className="notification_content space-y-2">
                <p className="text-sm text-gray-700">{title}</p>
                {message && <p className="text-xs text-gray-500">{message}</p>}
                <Link
                    to={linkTo}
                    className="inline-block mt-2 text-indigo-600 hover:underline text-sm font-medium"
                >
                    {linkText}
                </Link>
            </div>
        </div>
    );
}

export default Notification;
