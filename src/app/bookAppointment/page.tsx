import AppBar from "@/packages/ui/components/AppBar";
import Booking from "@/packages/ui/components/Appointment/Booking";
import PageHeader from "@/packages/ui/components/PageHeader";

export default function() {
    return <div>
        <AppBar />
        <PageHeader  text="Book Appointment"/>
        <Booking />
    </div>
}