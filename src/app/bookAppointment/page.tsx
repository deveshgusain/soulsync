"use client"

import getUserFromToken from "@/packages/actions/patient/getUserFromToken";
import AppBar from "@/packages/ui/components/AppBar";
import Booking from "@/packages/ui/components/Appointment/Booking";
import PageHeader from "@/packages/ui/components/PageHeader";

import { useSearchParams } from "next/navigation";

export default function () {
    const searchParams = useSearchParams()
    const doctorId = searchParams.get('doctorId');
    const date = searchParams.get('date');
    const time = searchParams.get('time');
    const doctorName = searchParams.get('doctorName');

    return <div>
        <AppBar />
        <PageHeader text="Book Appointment" />
        <Booking date={date} time={time} doctorId={doctorId} doctorName={doctorName} />
    </div>
}