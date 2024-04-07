"use client"
import { useState } from "react";
import DoctorCardDetails from "./DoctorCardDetails";
import Overview from "./Overview";
import Experience from "./Experience";
import Reviews from "./Reviews";
import DatePicker from "react-datepicker";
import { useRouter } from 'next/navigation'


import "react-datepicker/dist/react-datepicker.css";


export default function () {
    const router = useRouter()

    const [selected, setSelected] = useState("overview");
    const [startDate, setStartDate] = useState(new Date());
    const [slot, setSlot] = useState();

    return <div className="bg-lightteal min-h-screen grid grid-cols-3">
        <div className="col-span-2 p-8">
            <div >
                <DoctorCardDetails imageSrc="/team/team-5.jpg" name="Dr. Mary Astor" description="MDS - Periodontology and BDS" totalFeedback={10} totalRating={39} />
                <div className=" bg-white rounded-lg ">
                    <div className="md:flex md:justify-around bg-darkslateblue rounded-t-lg text-slate-400 font-semibold  text-center">
                        <div className={`w-full p-4 cursor-pointer ${selected == 'overview' ? 'text-mediumturquoise' : ''}`} onClick={() => setSelected("overview")}>
                            Overview
                        </div>
                        <div className={`w-full border-l p-4 border-slate-300 cursor-pointer ${selected == 'experience' ? 'text-mediumturquoise' : ''}`} onClick={() => setSelected("experience")}>
                            Experience
                        </div>
                        <div className={`w-full border-l p-4 border-slate-300 cursor-pointer ${selected == 'reviews' ? 'text-mediumturquoise' : ''}`} onClick={() => setSelected("reviews")}>
                            Reviews
                        </div>
                    </div>
                    <div className="p-8">
                        {selected == 'overview' ?
                            < Overview /> :
                            selected == 'experience' ?
                                <Experience />
                                :
                                <Reviews />
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="col-span-1 p-8">
            <div className=" bg-white rounded-lg ">
                <div className=" bg-darkslateblue rounded-t-lg  p-5">
                    <div className="text-white font-bold text-2xl w-fit ">
                        Book Appointment
                    </div>
                    <div className="text-slate-300 text-md pt-2">
                        Monday to Friday: 09:00Am-05:00PM
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex justify-around p-4 bg-lightteal rounded-lg ">
                        <DatePicker className="bg-lightteal text-slate-500 w-52" selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-slate-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>
                    </div>
                    <div className="pt-6">
                        <div className="text-darkblue text-md font-bold">
                            {`Avaible slots for ${startDate.toDateString()}`}
                        </div>
                        <div className="grid grid-cols-3 pt-4 justify-between">
                            <Slot time="10:00 am" slot={slot} setSlot={setSlot} />
                            <Slot time="11:00 am" slot={slot} setSlot={setSlot} />
                            <Slot time="01:00 pm" slot={slot} setSlot={setSlot} />
                            <Slot time="02:00 pm" slot={slot} setSlot={setSlot} />
                            <Slot time="03:00 pm" slot={slot} setSlot={setSlot} />
                        </div>
                        <button
                            className="mt-6 flex justify-center bg-mediumturquoise hover:bg-darkslateblue transition-colors duration-500 ease-out delay-0 text-white font-medium py-4 px-6 rounded-full w-full "
                            onClick={() => router.push('/bookAppointment')}
                        >
                            Book Appoinment &nbsp;

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
}

function Slot({ time, slot, setSlot }: { time: string, slot: any, setSlot: (time: any) => void }) {

    return <div className={`${slot == time ? "bg-darkslateblue text-white" : "bg-lightteal text-slate-500"}    rounded-lg  px-3 py-2 min-w-fit m-2 whitespace-nowrap cursor-pointer`} onClick={() => setSlot(time)}>
        {time}
    </div>
}