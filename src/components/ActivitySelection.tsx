import React from "react";

interface props {
    icon: React.ReactElement,
    name: string
}

const ActivitySelection = ({ icon, name }: props) => {
    const currentUrl = window.location.pathname
    
    return (
        <a href={`${name.toLowerCase().split(' ')[0]}`} className={`gap-3 ${currentUrl.includes(name.toLowerCase().split(' ')[0]) && 'bg-[#EBEBEB]'}`} >
            <button className="flex">
                {icon}
                <p className='ml-2'>{name}</p>
            </button>
        </a>
    )
}

export default ActivitySelection