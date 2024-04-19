
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
                <div className="flex text-md items-center pt-2">
                    <BulletPoint />
                    <div className="text-darkblue pl-2 font-medium">
                        {course.collegeName}
                    </div>
                    <div className="text-slate-500 pl-2">
                        {`- ${course.courseName}`}
                    </div>
                </div>
            ))}
            {/* <div className="flex text-md items-center pt-2">
                <BulletPoint />
                <div className="text-darkblue pl-2 font-medium">
                    New York Medical College
                </div>
                <div className="text-slate-500 pl-2">
                    - Doctor of Medicine
                </div>
            </div>
            <div className="flex text-md items-center pt-2">
                <BulletPoint />
                <div className="text-darkblue pl-2 font-medium">
                    Montefiore Medical Center
                </div>
                <div className="text-slate-500 pl-2">
                    - Residency in Internal Medicin
                </div>
            </div> */}
            {/* <div className="flex text-md items-center pt-2">
                <BulletPoint />
                <div className="text-darkblue pl-2 font-medium">
                    New York Medical College
                </div>
                <div className="text-slate-500 pl-2">
                    - Master Internal Medicine
                </div>
            </div> */}
        </div>
        <div className="text-darkblue text-xl font-bold pt-7">
            Awards
        </div>
        <div className="pt-3">
            {awards.map(award => (
                <div className="flex text-md items-center pt-2">
                    <BulletPoint />
                    <div className="text-darkblue pl-2 font-medium">
                        {award.awardName}
                    </div>
                    <div className="text-slate-500 pl-1">
                        {`(${award.awardYear})`}
                    </div>
                </div>
            ))}
            {/* <div className="flex text-md items-center pt-2">
                <BulletPoint />
                <div className="text-darkblue pl-2 font-medium">
                    {"Award win by American Dental Council of America"}
                </div>
                <div className="text-slate-500 pl-1">
                    {"(2006)"}
                </div>
            </div>
            <div className="flex text-md items-center pt-2">
                <BulletPoint />
                <div className="text-darkblue pl-2 font-medium">
                    {"Award win by Karnataka State Dental Council"}
                </div>
                <div className="text-slate-500 pl-1 ">
                    {"(2009)"}
                </div>
            </div>
            <div className="flex text-md items-center pt-2">
                <BulletPoint />
                <div className="text-darkblue pl-2 font-medium">
                    {"Award win by Manchester Academy of Oral Medicine"}
                </div>
                <div className="text-slate-500 pl-1  ">
                    {"(2015)"}
                </div>
            </div> */}
        </div>
    </div>
}



function BulletPoint({ }) {
    return <div className="rounded-full h-3 w-3 border-4 border-slate-300">
    </div>
}