import AppBar from "@/packages/ui/components/AppBar";
import DoctorDetails from "@/packages/ui/components/DoctorDetails/DoctorDetails";
import PageHeader from "@/packages/ui/components/PageHeader";

export default function() {
    return <div>
        <AppBar />
        <PageHeader text="Doctor Details" />
        <DoctorDetails />
    </div>
}