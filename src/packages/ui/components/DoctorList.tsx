import DoctorCard from "./DoctorCard";

export default function () {
    return <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <DoctorCard imageSrc="/team/team-5.jpg" name="Dr. Mary Astor" description="MDS - Periodontology and BDS" totalFeedback={10} totalRating={39} />
        <DoctorCard imageSrc="/team/team-5.jpg" name="Dr. Mary Astor" description="MDS - Periodontology and BDS" totalFeedback={10} totalRating={39} />
        <DoctorCard imageSrc="/team/team-5.jpg" name="Dr. Mary Astor" description="MDS - Periodontology and BDS" totalFeedback={10} totalRating={39} />
        <DoctorCard imageSrc="/team/team-5.jpg" name="Dr. Mary Astor" description="MDS - Periodontology and BDS" totalFeedback={10} totalRating={39} />
        <DoctorCard imageSrc="/team/team-5.jpg" name="Dr. Mary Astor" description="MDS - Periodontology and BDS" totalFeedback={10} totalRating={39} />
    </div>
}