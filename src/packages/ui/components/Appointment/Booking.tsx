"use client"
import InputBox from "../InputBox"
import CheckBox from "./CheckBox"

export default function () {
    return <div className="p-4 grid grid-cols-3 bg-lightteal min-h-screen ">
        <div className="col-span-2 rounded-lg mr-10">
            <div className="rounded-t-lg bg-darkslateblue">
                <div className="p-6  text-3xl font-bold text-white">
                    Appointment Information
                </div>
            </div>
            <div className="p-8 bg-white rounded-b-lg">
                <div className=" mt-2">
                    <div className="text-darkblue text-xl font-bold ">
                        Are You a New Patient?
                    </div>
                    <CheckBox text="Yes i have seen this doctor before" />
                    <CheckBox text="No i am a new patient" />
                </div>
                <div className="mt-7">
                    <div className="text-darkblue text-xl font-bold ">
                        Please Specify Your Sex
                    </div>
                    <CheckBox text="Male" />
                    <CheckBox text="Female" />
                </div>
                <div className="mt-7">
                    <div className="text-darkblue text-xl font-bold">
                        Note to the doctor (optional)
                    </div>
                    <textarea name="message" rows={6} placeholder="Write your not...." className="min-w-full border rounded-lg border-slate-500 p-3 mt-3" ></textarea>
                </div>
                <div className="mt-7">
                    <div className="text-darkblue text-xl font-bold ">
                        Payment Information:
                    </div>
                    <div className="mt-2">
                        <InputBox label="Name on card" placeholder="Devesh Gusain" value="" onChange={() => { }} />
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="w-1/2">
                            <InputBox label="Card Number" placeholder="Devesh Gusain" value="" onChange={() => { }} />
                        </div>
                        <div className="flex h-fit ml-4 pt-9">
                            <img src="resource/card-1.png" alt="card" className="ml-2 cursor-pointer" />
                            <img src="resource/card-2.png" alt="card" className="ml-2 cursor-pointer" />
                            <img src="resource/card-3.png" alt="card" className="ml-2 cursor-pointer" />
                            <img src="resource/card-4.png" alt="card" className="ml-2 cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex mt-2">
                        <div className="w-1/2">
                            <InputBox label="Expiration date" placeholder="mm/yy" value="" onChange={() => { }} />
                        </div>
                        <div className="w-1/2 pl-6">
                            <InputBox label="Security code" placeholder="CCV" value="" onChange={() => { }} />
                        </div>
                    </div>
                    <div className="mt-2">
                        <CheckBox text="I accept terms and conditions and general policy" />
                    </div>
                </div>
            </div>
        </div>
        <div className="col-span-1 rounded-lg ">
            <div className="rounded-t-lg bg-darkslateblue">
                <div className="p-6  text-3xl font-bold text-white">
                    Booking Summary
                </div>
            </div>
            <div className="p-8 bg-white rounded-lg text-darkblue text-md">
                <div className="flex justify-between">
                    <div>
                        Date
                    </div>
                    <div>
                        {"04/17/2024"}
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <div>
                        Time
                    </div>
                    <div>
                        {"09:30 AM"}
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <div>
                        Doctor name
                    </div>
                    <div>
                        {"Dr. Agnes Ayres"}
                    </div>
                </div>
                <div className="border-b border-slate-300 mt-6">
                </div>
                <div className="flex justify-between mt-4">
                    <div>
                        General Consultation
                    </div>
                    <div>
                        {"$ 50"}
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <div>
                        Back Pain
                    </div>
                    <div>
                        {"$ 60"}
                    </div>
                </div>
                <div className="border-b border-slate-300 mt-6">
                </div>
                <div className="flex justify-between mt-4 text-xl font-medium">
                    <div>
                        Total
                    </div>
                    <div>
                        {"$ 100"}
                    </div>
                </div>
                <div className="border-b border-slate-300 mt-6">
                </div>
                <div className="mt-6">
                    <button
                        className="flex justify-center bg-mediumturquoise hover:bg-darkslateblue text-white font-semibold text-lg py-4  rounded-full w-full transition-colors duration-500 ease-out "
                    >
                        Confirm and Pay &nbsp;

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
}

