import React from 'react';

function Card({ title, count, icon }) {

    console.log(Card)
    return (
        <div className="bg-white rounded-2xl p-6 flex items-center justify-between text-white shadow-md w-full max-w-[285px]">
            <div className="flex flex-col">
                <p className="text-md font-medium text-black">{title}</p>
                <h2 className="text-2xl font-bold text-black">{count}</h2>
            </div>
            <div className="text-3xl bg-indigo-500 p-3 rounded-2xl">
                {icon}
            </div>
        </div>
    );
}

export default Card;
