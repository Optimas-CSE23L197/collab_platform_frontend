import React from 'react';

function SidebarProfile({ name, role }) {
    return (
        <div className="bg-white w-full h-[100px] rounded-xl p-3 shadow-sm">
            <figure className="flex items-center gap-4">
                <img
                    className="h-[64px] w-[64px] object-cover border border-indigo-500 rounded-full"
                    src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
                    alt="employee profile"
                />
                <figcaption>
                    <h2 className="font-semibold text-indigo-600 text-base leading-tight">
                        {name}
                    </h2>
                    <p className="text-sm text-gray-700">{role}</p>
                </figcaption>
            </figure>
        </div>
    );
}

export default SidebarProfile;
