"use client"
import AppBar from "@/packages/ui/components/AppBar";
import PageHeader from "@/packages/ui/components/PageHeader";
import SubmitReview from "@/packages/ui/components/Review/SubmitReview";

import { useSearchParams } from "next/navigation";

export default function () {
    const searchParams = useSearchParams();
    const doctorId = searchParams.get("doctorId") || "";
    const doctorName = searchParams.get("doctorName") || "";
    return <div>
        <AppBar />
        <PageHeader text="Submit Review" />
        <SubmitReview doctorId={doctorId} doctorName={doctorName} />
    </div>
}