"use client"
import { useState } from "react"
import InputBox from "../InputBox";

export default function () {
    const [star, setStar] = useState(0);
    return <div className="p-4 flex justify-center bg-lightteal min-h-screen ">
        <div className="w-1/2  rounded-lg mr-10">
            <div className="rounded-t-lg bg-darkslateblue">
                <div className="p-6">
                    <div className="text-2xl font-bold text-white">
                        Write a Review for Dr. Agnes Ayres
                    </div>
                    <div className="text-lg text-slate-300">
                        Don’t hesitate to review me
                    </div>
                </div>
            </div>
            <div className="p-8 bg-white rounded-b-lg">
                <div className="pt-2">
                    <div className="text-darkblue text-xl font-bold ">
                        Overall Rating
                    </div>
                </div>
                <div className="flex pt-4">
                    <Star level={1} star={star} setStar={setStar} />
                    <Star level={2} star={star} setStar={setStar} />
                    <Star level={3} star={star} setStar={setStar} />
                    <Star level={4} star={star} setStar={setStar} />
                    <Star level={5} star={star} setStar={setStar} />
                </div>
                <div className="border-b border-slate-300 mt-6">
                </div>
                <div className="pt-2">
                    <InputBox label="Title of your review" placeholder="If you could say it in one sentance, what would you say?" value="" onChange={() => { }} />
                </div>
                <div className="pt-4">
                    <div className="block text-slate-500 font-medium">
                        Your review
                    </div>
                    <textarea name="message" rows={6} placeholder="Write your review here...." className="min-w-full border rounded-lg border-slate-500 p-3 mt-2" ></textarea>
                </div>
                <div className="mt-6">
                    <button
                        className="flex justify-center bg-mediumturquoise hover:bg-darkslateblue text-white font-semibold text-lg py-4  rounded-full w-full transition-colors duration-500 ease-out "
                    >
                        Submit Review &nbsp;

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
}

function Star({ level, star, setStar }: { level: number, star: number, setStar: (ar0: number) => void }) {
    return <div className="border rounded-lg items-center p-2 ml-1">
        <svg onClick={() => setStar(level)} className={`cursor-pointer w-6 h-6 ${star >= level ? "text-yellow-500" : "text-gray-300"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
    </div>
}