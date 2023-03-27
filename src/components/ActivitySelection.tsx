import React from "react";

interface props {
    icon: React.ReactElement,
    name: string
}

const ActivitySelection = ({ icon, name }: props) => {
    return (
        <div className='gap-3'>
            <button className="flex">
                {icon}
                <p className='ml-2'>{name}</p>
            </button>
        </div>
    )
}

export default ActivitySelection