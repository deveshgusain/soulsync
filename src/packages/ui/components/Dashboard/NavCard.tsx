"use client"

import { useRouter } from "next/navigation"

type propType = {
    selected: string,
    setSelected: (selected: string) => void,
    name: string,
    dob: string,
    imgSrc: string
}

export default function ({ selected, setSelected, name, dob, imgSrc }: propType) {

    const router = useRouter();

    return <div className="bg-white rounded-lg overflow-hidden ">
        <div className="relative pb-20 mb-20">
            <div className="z-10 top-0 left-0 bg-darkslateblue h-72 ">
                <img src={imgSrc} alt="profile" className="h-full w-full" />
            </div>
            <div className="absolute bottom-0 mx-10 bg-white rounded-lg shadow-2xl shadow-gray-300 ">
                <div className="px-12 py-10 ">
                    <div className=" text-darkblue text-xl font-extrabold text-center ">
                        {name}
                    </div>
                    <div className="flex items-center pt-1 text-slate-500 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                        </svg>
                        <div className="pl-1 text-sm ">
                            {dob}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className={`flex border-t px-8 py-4 ${selected === 'dashboard' ? 'text-mediumturquoise' : 'text-slate-500'}  items-center cursor-pointer hover:text-mediumturquoise`} onClick={() => setSelected("dashboard")}>
                <div >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm18 3H3.75v9a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V9Zm-15-3.75A.75.75 0 0 0 4.5 6v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H5.25Zm1.5.75a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V6Zm3-.75A.75.75 0 0 0 9 6v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H9.75Z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="text-md font-semibold pl-3">
                    Dashboard
                </div>
            </div>
            <div className={`flex border-t px-8 py-4 ${selected === 'profile' ? 'text-mediumturquoise' : 'text-slate-500'}  items-center cursor-pointer hover:text-mediumturquoise`} onClick={() => setSelected("profile")}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                    </svg>

                </div>
                <div className="text-md font-semibold pl-3">
                    My Profile
                </div>
            </div>
            <div className={`flex border-t px-8 py-4 ${selected === 'password' ? 'text-mediumturquoise' : 'text-slate-500'}  items-center cursor-pointer hover:text-mediumturquoise`} onClick={() => setSelected("password")}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                    </svg>

                </div>
                <div className="text-md font-semibold pl-3">
                    Change Password
                </div>
            </div>
            <div className={`flex border-t px-8 py-4 ${selected === 'logout' ? 'text-mediumturquoise' : 'text-slate-500'}  items-center cursor-pointer hover:text-mediumturquoise`}
                onClick={() => {
                    setSelected("logout");
                    localStorage.removeItem("token");
                    router.push("/login");
                }
                } >
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.166 5.106a.75.75 0 0 1 0 1.06 8.25 8.25 0 1 0 11.668 0 .75.75 0 1 1 1.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="text-md font-semibold pl-3">
                    Logout
                </div>
            </div>
        </div>
    </div>
}