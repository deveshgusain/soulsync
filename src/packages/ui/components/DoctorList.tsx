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
            doctors ?
                doctors.map((doctor: any) => (
                    <DoctorCard key={doctor.userId} doctorId={doctor.userId} imageSrc={doctor.imgPath} name={doctor.name} description={doctor.speciality} totalFeedback={doctor.totalFeedback} totalRating={doctor.totalRating} />
                )) :
                (
                    <div>
                        No Entries found
                    </div>
                )
        }
    </div >
}