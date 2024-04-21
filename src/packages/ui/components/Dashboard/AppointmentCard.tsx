export default function (props: any) {

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
                    {props.appointments ?
                        props.appointments.map((appointment: any) => {

                            return (
                                <tr className="border-b">
                                    <td><DoctorNameRow firstName={appointment.doctor.user.firstName} lastName={appointment.doctor.user.lastName} speciality={appointment.doctor.user.speciality} imgPath={appointment.doctor.imgPath} /></td>
                                    <td><ApptDateRow date={appointment.date} /></td>
                                    <td >
                                        <div className="text-darkblue ">
                                            {appointment.bookingDate.toLocaleDateString()}
                                        </div>
                                    </td>
                                    <td >
                                        <div className="text-darkblue ">
                                            {appointment.amount}
                                        </div>
                                    </td>
                                    <td >
                                        <SuccessStatusRow />
                                    </td>
                                </tr>
                            )
                        })
                        : <></>
                    }
                </tbody>
            </table>
        </div>
    </div>
}

function DoctorNameRow({ firstName, lastName, speciality, imgPath }: { firstName: string, lastName: string, speciality: string, imgPath: string }) {
    return <div className="flex items-center pl-4 py-4">
        <div>
            <img src={imgPath} alt="doctor" className="h-14 w-14 rounded-full"/>
        </div>
        <div className="pl-2">
            <div className="text-darkblue font-semibold">
                {`Dr. ${firstName} ${lastName}`}
            </div>
            <div className="text-slate-500">
                {speciality}
            </div>
        </div>
    </div>
}

function ApptDateRow({ date }: { date: Date }) {
    return <div className="flex items-center py-4">
        <div className="pl-2">
            <div className="text-darkblue ">
                {date.toDateString()}
            </div>
            <div className="text-mediumturquoise">
                {date.toLocaleTimeString()}
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



