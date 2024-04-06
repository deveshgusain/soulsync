"use client"
import { useState } from "react"

type propType = {
    imageName: string,
    title: string,
    description: string,
    number: string,
    bottomColor: string
}
export default function ({ imageName, title, description, number, bottomColor }: propType) {
    const [isFullBorder, setIsFullBorder] = useState(false);
    
    return <div className="bg-white p-10 border-l rounded-lg relative" onMouseEnter={() => setIsFullBorder(true)} onMouseLeave={() => setIsFullBorder(false)}>
        <div className="relative" >
            <img src={imageName} alt="" />
            <div className="absolute top-0 left-20 bg-darkblue w-12 h-12 rounded-full  flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <div className="text-center text-white h-fit text-2xl font-medium">
                        {number}
                    </div>
                </div>
            </div>
        </div>
        <div className="pt-4 text-2xl font-extrabold text-darkblue">
            {title}
        </div>
        <div className="pt-4 text-lg text-slate-500">
            {description}
        </div>
        <div className="flex justify-center">
            <div className={`absolute bottom-0  h-1 bg-${bottomColor} ${isFullBorder ? 'w-full left-0 right-0' : 'w-1/2 left-1/4 right-1/4'} transition-all duration-500`}></div>
        </div>
    </div>
}