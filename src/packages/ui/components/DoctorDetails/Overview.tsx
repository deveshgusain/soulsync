export default function () {
    return <div>
        <div className="text-darkblue text-xl font-bold">
            About Dr. Agnes Ayres:
        </div>
        <div className="text-slate-500 pt-5 text-md">
            Dr. Agnes Ayres is a Maxillofacial Surgeon in New York, NY. Dr. Ayres has more experience with Congenital Cardiac Disorders and Cardiac Care than other specialists in his area. He is affiliated with medical facilities such as Mount Sinai Morningside and Roosevelt Hospital. He is accepting new patients. Be sure to call ahead with Dr. Pinney to book an appointment.
        </div>
        <div className="text-darkblue text-xl font-bold pt-7">
            Specialities
        </div>
        <div className="text-slate-500 pt-5 text-md">
            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi.
        </div>
        <div className="text-darkblue text-xl font-bold pt-7">
            Educational Background
        </div>
        <div className="text-slate-500 pt-5 text-md">
            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi.
        </div>
        <div className="pt-3">
            <div className="flex text-md items-center pt-2">
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
            </div>
            <div className="flex text-md items-center pt-2">
                <BulletPoint />
                <div className="text-darkblue pl-2 font-medium">
                    New York Medical College
                </div>
                <div className="text-slate-500 pl-2">
                    - Master Internal Medicine
                </div>
            </div>
        </div>
        <div className="text-darkblue text-xl font-bold pt-7">
            Awards
        </div>
        <div className="pt-3">
            <div className="flex text-md items-center pt-2">
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
            </div>
        </div>
    </div>
}



function BulletPoint({ }) {
    return <div className="rounded-full h-3 w-3 border-4 border-slate-300">
    </div>
}