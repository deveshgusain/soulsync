
import { Experience, Skill } from "@prisma/client"

type proptype = {
    experienceSummary: string,
    experiences: Experience[],
    skills: Skill[]
}


export default function ({ experienceSummary, experiences, skills }: proptype) {
    return <div>
        <div className="text-darkblue text-xl font-bold">
            Professional Experience
        </div>
        <div className="text-slate-500 pt-5 text-md">
            {experienceSummary}
        </div>
        <div className="pt-3">
            {experiences.map(experience => (
                <div>
                    <div className="flex  items-center pt-2">
                        <BulletPoint />
                        <div className="text-darkblue pl-2 font-medium text-lg">
                            {experience.institution}
                        </div>
                    </div>
                    <div className="pl-5 flex">
                        <div className="text-darkblue ">
                            {`${experience.profile}`}
                        </div>
                        <div className="text-slate-500 pl-1 ">
                            {`(${experience.from}-${experience.to})`}
                        </div>
                    </div>
                </div>
            ))}
            {/* <div>
                <div className="flex  items-center pt-2">
                    <BulletPoint />
                    <div className="text-darkblue pl-2 font-medium text-lg">
                        {"Aurora Medical & Dental College:"}
                    </div>
                </div>
                <div className="pl-5 flex">
                    <div className="text-darkblue ">
                        {"Medical & General Dentistry"}
                    </div>
                    <div className="text-slate-500 pl-1 ">
                        {"(Aug 2008-Sep 2013)"}
                    </div>
                </div>
            </div>
            <div>
                <div className="flex  items-center pt-2">
                    <BulletPoint />
                    <div className="text-darkblue pl-2 font-medium text-lg">
                        {"Horizon Dermatology & Cosmetic Center:"}
                    </div>
                </div>
                <div className="pl-5 flex">
                    <div className="text-darkblue ">
                        {"Assistant Darmatologist"}
                    </div>
                    <div className="text-slate-500 pl-1 ">
                        {"(Oct 2013-Nov 2017)"}
                    </div>
                </div>
            </div>
            <div>
                <div className="flex  items-center pt-2">
                    <BulletPoint />
                    <div className="text-darkblue pl-2 font-medium text-lg">
                        {"New Apollo Hospital:"}
                    </div>
                </div>
                <div className="pl-5 flex">
                    <div className="text-darkblue ">
                        {"Darmatologist"}
                    </div>
                    <div className="text-slate-500 pl-1 ">
                        {"(Dec 2017-Till Now)"}
                    </div>
                </div>
            </div> */}
        </div>
        <div className="text-darkblue text-xl font-bold pt-7">
            Key Skills
        </div>
        <div className="pt-2">
            {skills.map(skill => (
                <div className="flex  items-center pt-2">
                    <BulletPoint />
                    <div className="text-darkblue pl-2">
                        {`${skill.skill}`}
                    </div>
                </div>
            ))}
            {/* <div className="flex  items-center pt-2">
                <BulletPoint />
                <div className="text-darkblue pl-2">
                    {"Proficient in assisting all Gynecology & Obstetrics Surgeries."}
                </div>
            </div>
            <div className="flex  items-center pt-2">
                <BulletPoint />
                <div className="text-darkblue pl-2">
                    {"Expert in conducting all high risk labor."}
                </div>
            </div>
            <div className="flex  items-center pt-2">
                <BulletPoint />
                <div className="text-darkblue pl-2">
                    {"Proficient in performing all minor surgeries."}
                </div>
            </div>
            <div className="flex  items-center pt-2">
                <BulletPoint />
                <div className="text-darkblue pl-2">
                    {"Expert in handling all outpatients & inpatients department"}
                </div>
            </div>
            <div className="flex  items-center pt-2">
                <BulletPoint />
                <div className="text-darkblue pl-2">
                    {"Able to perform ultrasound of Gynecology & Obstetrics"}
                </div>
            </div> */}
        </div>
    </div>
}



function BulletPoint({ }) {
    return <div className="rounded-full h-3 w-3 border-4 border-slate-300">
    </div>
}