"use client"
import { useEffect, useState } from "react";
import DoctorCardDetails from "./DoctorCardDetails";
import Overview from "./Overview";
import Experience from "./Experience";
import Reviews from "./Reviews";
import DatePicker from "react-datepicker";
import { useRouter } from 'next/navigation'


import "react-datepicker/dist/react-datepicker.css";
import { getDoctor } from "@/packages/actions/doctors";
import { getDocAppointments } from "@/packages/actions/appointment/getDocAppointment";
import { checkUser } from "@/packages/actions/user/checkUser";
import { toast } from "sonner";



export default function ({ doctorId }: { doctorId: number }) {
    const router = useRouter()

    const initialDate = new Date();
    initialDate.setDate(new Date().getDate() + 1);

    const [selected, setSelected] = useState("overview");
    const [startDate, setStartDate] = useState(initialDate);
    const [slot, setSlot] = useState();
    const [doctor, setDoctor] = useState<any>();

    const [appoinment, setAppoinment] = useState<any>([]);


    useEffect(() => {
        (async () => {
            try {
                const doc = await getDoctor({ doctorId });
                if (doc.error) {
                    throw new Error(doc.error)
                }
                setDoctor(doc.doctor);

            } catch (error) {
                console.log("failed to access doctor details");
            }
        })();
    }, []);

    useEffect(() => {
        async function getAppointment() {
            const appoinments = await getDocAppointments({ doctorId: doctorId.toString(), date: startDate });

            let freeHours: string[] = [];
            for (const hours of [
                { hour: 9, value: '09:00 AM' },
                { hour: 10, value: '10:00 AM' },
                { hour: 11, value: '11:00 AM' },
                { hour: 12, value: '12:00 AM' },
                { hour: 1, value: '01:00 PM' },
                { hour: 2, value: '02:00 PM' },
                { hour: 3, value: '03:00 PM' },
                { hour: 4, value: '04:00 PM' },
                { hour: 5, value: '05:00 PM' }]) {

                if (appoinments.hours && !appoinments.hours.includes(hours.hour)) {
                    freeHours = [...freeHours, hours.value]
                }
            }

            setAppoinment(freeHours);
        };
        getAppointment();
    }, [startDate]);

    return <div className="bg-lightteal min-h-screen grid grid-cols-3">
        {doctor ? (
            <>
                <div className="col-span-2 p-8">
                    <div >
                        <DoctorCardDetails imageSrc={doctor.imgPath} name={`Dr. ${doctor.name}`} description={doctor.speciality} totalFeedback={doctor.totalFeedback} totalRating={doctor.totalRating} />
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
                                    < Overview doctorName={doctor.name} about={doctor.about} specialitySummary={doctor.specialitySummary} educationSummary={doctor.educationSummary} courses={doctor.courses} awards={doctor.awards} /> :
                                    selected == 'experience' ?
                                        <Experience experienceSummary={doctor.experienceSummary} experiences={doctor.experiences} skills={doctor.skills} />
                                        :
                                        <Reviews doctorId={doctorId.toString()} doctorName={doctor.name} reviews={doctor.Review} totalFeedback={doctor.totalFeedback} totalRating={doctor.totalRating} />
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
                            <div className="flex  p-4 bg-lightteal rounded-lg items-center ">
                                <DatePicker
                                    minDate={initialDate}
                                    showIcon
                                    className="bg-lightteal text-slate-500 w-full"
                                    selected={startDate}
                                    onChange={(date: Date) => setStartDate(date)}
                                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-slate-500 items-center">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>}
                                />
                            </div>
                            <div className="pt-6">
                                <div className="text-darkblue text-md font-bold">
                                    {`Avaible slots for ${startDate.toDateString()}`}
                                </div>
                                <div className="grid grid-cols-3 pt-4 justify-between">
                                    {appoinment.map((appoinment: any) => (
                                        <Slot time={appoinment} slot={slot} setSlot={setSlot} />
                                    ))}
                                </div>
                                <button
                                    className="mt-6 flex justify-center bg-mediumturquoise hover:bg-darkslateblue transition-colors duration-500 ease-out delay-0 text-white font-medium py-4 px-6 rounded-full w-full "
                                    onClick={() => {
                                        router.push(`/bookAppointment?doctorId=${doctorId}&date=${startDate}&time=${slot}&doctorName=${doctor.name}`);
                                    }}
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
            </>)
            : (<div> </div>)
        }
    </div >
}

function Slot({ time, slot, setSlot }: { time: string, slot: any, setSlot: (time: any) => void }) {

    return <div className={`${slot == time ? "bg-darkslateblue text-white" : "bg-lightteal text-slate-500"}    rounded-lg  px-3 py-2 min-w-fit m-2 whitespace-nowrap cursor-pointer`} onClick={() => setSlot(time)}>
        {time}
    </div>
}