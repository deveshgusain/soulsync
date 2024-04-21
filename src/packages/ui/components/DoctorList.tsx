"use client"
import { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";

import { getDoctorList } from "@/packages/actions/doctors";

export default function () {
    const [doctors, setDoctors] = useState<any>([]);

    useEffect(() => {
        (async function () {
            const docs = await getDoctorList();
            setDoctors(docs.doctorList);
        })()
    }, [])
    return <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {
            doctors.length > 0 ?
                doctors.map((doctor: any) => (
                    <DoctorCard key={doctor.userId} doctorId={doctor.userId} imageSrc={doctor.imgPath} name={doctor.name} description={doctor.speciality} totalFeedback={doctor.totalFeedback} totalRating={doctor.totalRating} />
                )) :
                (
                    // Skeletion
                    <>
                        <div role="status" className="max-w-sm p-4 m-10  border border-gray-200 rounded-3xl shadow animate-pulse md:p-6 dark:border-gray-700">
                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-3xl dark:bg-gray-700">
                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                </svg>
                            </div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div role="status" className="max-w-sm p-4 m-10  border border-gray-200 rounded-3xl shadow animate-pulse md:p-6 dark:border-gray-700">
                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-3xl dark:bg-gray-700">
                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                </svg>
                            </div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div role="status" className="max-w-sm p-4 m-10  border border-gray-200 rounded-3xl shadow animate-pulse md:p-6 dark:border-gray-700">
                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-3xl dark:bg-gray-700">
                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                </svg>
                            </div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </>
                )
        }
    </div >
}