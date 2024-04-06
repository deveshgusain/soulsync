import AppBar from "@/packages/ui/components/AppBar";
import DoctorList from "@/packages/ui/components/DoctorList";
import PageHeader from "@/packages/ui/components/PageHeader";

export default function () {
    return <div>
        <AppBar />
        <PageHeader text="Doctors List" />
        <DoctorList />
    </div>
}