
import { Course, Award } from "@prisma/client"

type proptype = {
    doctorName: string,
    about: string,
    specialitySummary: string,
    educationSummary: string,
    courses: Course[],
    awards: Award[],
}

export default function ({ doctorName, about, specialitySummary, educationSummary, courses, awards }: proptype) {

    return <div>
        <div className="text-darkblue text-xl font-bold">
            {`About Dr. ${doctorName}:`}
        </div>
        <div className="text-slate-500 pt-5 text-md">
            {about}
        </div>
        <div className="text-darkblue text-xl font-bold pt-7">
            Specialities
        </div>
        <div className="text-slate-500 pt-5 text-md">
            {specialitySummary}
        </div>
        <div className="text-darkblue text-xl font-bold pt-7">
            Educational Background
        </div>
        <div className="text-slate-500 pt-5 text-md">
            {educationSummary}
        </div>
        <div className="pt-3">
            {courses.map(course => (
                <div key={course.courseId} className="flex text-md items-center pt-2">
                    <BulletPoint />
                    <div className="text-darkblue pl-2 font-medium">
                        {course.collegeName}
                    </div>
                    <div className="text-slate-500 pl-2">
                        {`- ${course.courseName}`}
                    </div>
                </div>
            ))}
        </div>
        <div className="text-darkblue text-xl font-bold pt-7">
            Awards
        </div>
        <div className="pt-3">
            {awards.map(award => (
                <div key={award.awardId} className="flex text-md items-center pt-2">
                    <BulletPoint />
                    <div className="text-darkblue pl-2 font-medium">
                        {award.awardName}
                    </div>
                    <div className="text-slate-500 pl-1">
                        {`(${award.awardYear})`}
                    </div>
                </div>
            ))}
        </div>
    </div>
}

function BulletPoint({ }) {
    return <div className="rounded-full h-3 w-3 border-4 border-slate-300">
    </div>
}