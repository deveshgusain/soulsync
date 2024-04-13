export default function () {
    return <div className="bg-white rounded-lg">
        <div className="text-darkblue text-xl font-extrabold p-6">
            Doctors Appointment
        </div>
        <div className="overflow-hidden border">
            <table className="w-full text-left">
                <thead className="bg-slate-200 h-12" >
                    <tr className="line">
                        <th className="text-darkblue text-lg font-semibold pl-8 ">Doctor Name</th>
                        <th className="text-darkblue text-lg font-semibold ">Appt Date</th>
                        <th className="text-darkblue text-lg font-semibold ">Booking Date</th>
                        <th className="text-darkblue text-lg font-semibold ">Amount</th>
                        <th className="text-darkblue text-lg font-semibold ">Status</th>
                    </tr>
                </thead>
                <tbody className="p-6 text-md">
                    <tr className="border-b">
                        <td><DoctorNameRow /></td>
                        <td><ApptDateRow /></td>
                        <td >
                            <div className="text-darkblue ">
                                24 Apr, 2024
                            </div>
                        </td>
                        <td >
                            <div className="text-darkblue ">
                                $150.00
                            </div>
                        </td>
                        <td >
                            <FailureStatusRow />
                        </td>
                    </tr>
                    <tr>
                        <td><DoctorNameRow /></td>
                        <td><ApptDateRow /></td>
                        <td >
                            <div className="text-darkblue ">
                                24 Apr, 2024
                            </div>
                        </td>
                        <td >
                            <div className="text-darkblue ">
                                $150.00
                            </div>
                        </td>
                        <td >
                            <SuccessStatusRow  />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}

function DoctorNameRow() {
    return <div className="flex items-center pl-4 py-4">
        <div>
            <img src="resource/dashboard-doc-1.png" alt="" />
        </div>
        <div className="pl-2">
            <div className="text-darkblue font-semibold">
                Dr. Amelia Anna
            </div>
            <div className="text-slate-500">
                Cardiology
            </div>
        </div>
    </div>
}

function ApptDateRow() {
    return <div className="flex items-center py-4">
        <div className="pl-2">
            <div className="text-darkblue ">
                27 Apr 2024
            </div>
            <div className="text-mediumturquoise">
                10:30AM
            </div>
        </div>
    </div>
}

function SuccessStatusRow() {
    return <div className={`rounded-2xl  bg-green-100 text-green-700 px-3 py-1 font-semibold w-fit`}>
        {"Confirm"}
    </div>
}

function FailureStatusRow() {
    return <div className={`rounded-2xl  bg-red-100 text-red-700 px-3 py-1 font-semibold w-fit`}>
        {"Failure"}
    </div>
}



