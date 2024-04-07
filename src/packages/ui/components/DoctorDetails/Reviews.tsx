"use client"
import RatingStar from "../RatingStar";
import ReviewCard from "./ReviewCard";
import { useRouter } from "next/navigation";

export default function () {
    const router = useRouter();
    return <div>
        <div className="text-darkblue text-xl font-bold">
            Dr. Agnes Ayres Reviews
        </div>
        <div className="grid grid-cols-5 pt-5">
            <div className="col-span-1 bg-darkslateblue items-center rounded-lg px-5 py-3">
                <div className="text-mediumturquoise text-center text-3xl font-bold pb-2">
                    4.5
                </div>
                <RatingStar totalFeedback={10} totalRating={40} size={6} />
                <div className="text-white text-center pt-2">
                    Based on 10 review
                </div>
            </div>
            <div className="col-span-4 pl-8 ">
                <div className="flex items-center">
                    <div className="w-full bg-slate-300 rounded-md h-4 ">
                        <div className="bg-mediumturquoise h-4 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <div className="pl-6">
                        <svg className={`w-5 h-5 text-yellow-500  ms-1`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <div className="text-darkblue min-w-fit pl-3">
                        {"5 Stars"}
                    </div>
                </div>
                <div className="flex items-center pt-2">
                    <div className="w-full bg-slate-300 rounded-md h-4 ">
                        <div className="bg-mediumturquoise h-4 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <div className="pl-6">
                        <svg className={`w-5 h-5 text-yellow-500  ms-1`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <div className="text-darkblue min-w-fit pl-3">
                        {"4 Stars"}
                    </div>
                </div>
                <div className="flex items-center pt-2 ">
                    <div className="w-full bg-slate-300 rounded-md h-4 ">
                        <div className="bg-mediumturquoise h-4 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <div className="pl-6">
                        <svg className={`w-5 h-5 text-yellow-500  ms-1`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <div className="text-darkblue min-w-fit pl-3">
                        {"3 Stars"}
                    </div>
                </div>
                <div className="flex items-center pt-2">
                    <div className="w-full bg-slate-300 rounded-md h-4 ">
                        <div className="bg-mediumturquoise h-4 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                    <div className="pl-6">
                        <svg className={`w-5 h-5 text-yellow-500  ms-1`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <div className="text-darkblue min-w-fit pl-3">
                        {"2 Stars"}
                    </div>
                </div>
                <div className="flex items-center pt-2">
                    <div className="w-full bg-slate-300 rounded-md h-4 ">
                        <div className="bg-mediumturquoise h-4 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                    <div className="pl-6">
                        <svg className={`w-5 h-5 text-yellow-500  ms-1`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <div className="text-darkblue min-w-fit pl-3">
                        {"1 Stars"}
                    </div>
                </div>
            </div>
        </div>
        <div className="border mt-8"></div>
        <div className="">
            <ReviewCard imageSrc="resource/review-1.jpg" rating={4} name="Agnes Ayres" date="March 20, 2024" description="Lorem ipsum dolor sit amet consectetur adipisicing sed eiusmod tempor incididunt labore dolore magna aliqua enim." />
            <div className="border mt-4"></div>
            <ReviewCard imageSrc="resource/review-2.jpg" rating={5} name="Mary Astor" date="March 24, 2024" description="Lorem ipsum dolor sit amet consectetur adipisicing sed eiusmod tempor incididunt labore dolore magna aliqua enim." />
            <div className="border mt-4"></div>
            <ReviewCard imageSrc="resource/review-4.jpg" rating={3} name="Anderson" date="April 01, 2024" description="Lorem ipsum dolor sit amet consectetur adipisicing sed eiusmod tempor incididunt labore dolore magna aliqua enim." />
            <div className="border mt-4"></div>
            <ReviewCard imageSrc="resource/review-5.jpg" rating={4} name="Bradshaw" date="April 05, 2024" description="Lorem ipsum dolor sit amet consectetur adipisicing sed eiusmod tempor incididunt labore dolore magna aliqua enim." />
            <div className="border mt-4"></div>
        </div>
        <div className="w-fit ">
            <button
                className="mt-6 flex justify-center bg-mediumturquoise hover:bg-darkslateblue transition-colors duration-500 ease-out delay-0 text-white font-medium py-4 px-6 rounded-full "
                onClick={()=>{router.push("/submitReview")}}
            >
                Submit Review &nbsp;

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </div>
    </div>
}


