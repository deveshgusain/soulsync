"use client"
import { useEffect, useState } from "react";
import InputBox from "../../InputBox";
import { updateProfile } from "@/packages/actions/patient";

import { useRouter } from "next/navigation";

type propType = {
    firstName: string,
    lastName: string,
    email: string,
    dob: string,
    gender: string,
    age: number,
    mobile: number,
    address: string,
    bloodGroup: string,
    maritalStatus: string,
    note: string,
    setUser: (user: any) => void
}


export default function (props: propType) {

    const router = useRouter();

    const [edit, setEdit] = useState(false);
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [dob, setdob] = useState("")
    const [gender, setgender] = useState("")
    const [age, setage] = useState<any>(0)
    const [mobile, setmobile] = useState<any>(0)
    const [address, setaddress] = useState("")
    const [bloodGroup, setbloodGroup] = useState("")
    const [maritalStatus, setmaritalStatus] = useState("")
    const [note, setnote] = useState("")

    useEffect(() => {
        setfirstName(props.firstName)
        setlastName(props.lastName);
        setemail(props.email);
        setdob(props.dob);
        setgender(props.gender);
        setage(props.age);
        setmobile(props.mobile);
        setaddress(props.address);
        setbloodGroup(props.bloodGroup);
        setmaritalStatus(props.maritalStatus);
        setnote(props.note);
        console.log(props);
    }, [edit])
    return <div className="bg-white rounded-lg">
        <div className="text-darkblue p-8 text-xl font-extrabold flex justify-between">
            <div>
                Basic Information
            </div>
            {edit ? <></> :
                <div className="flex cursor-pointer" onClick={() => { setEdit(true) }}>
                    {"edit"}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-3">
                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg>
                </div>
            }
        </div>
        <div className="border"></div>
        <div className="p-8">
            <div className="flex justify-start">
                <div className="mr-6 w-full">
                    <InputBox label="First name" placeholder="Enter first name" onChange={(e) => { setfirstName(e.target.value) }} value={firstName} edit={edit} />
                </div>
                <InputBox label="Last name" placeholder="Enter Last name" onChange={(e) => { setlastName(e.target.value) }} value={lastName} edit={edit} />
            </div>
            <div className="flex justify-start">
                <div className="mr-6 w-full">
                    <InputBox label="Email" placeholder="Enter your Email" onChange={(e) => { setemail(e.target.value) }} value={email} edit={edit} />
                </div>
                <InputBox label="Date of birth" placeholder="Date of birth" onChange={(e) => { setdob(e.target.value) }} value={dob} edit={edit} />
            </div>
            <div className="flex justify-start">
                <div className="mr-6 w-full">
                    <InputBox label="Gender" placeholder="Your gender" onChange={(e) => { setgender(e.target.value) }} value={gender} edit={edit} />
                </div>
                <InputBox label="Age" placeholder="Your age" onChange={(e) => { setage(e.target.value) }} value={age} edit={edit} />
            </div>
            <div className="flex justify-start">
                <div className="mr-6 w-full">
                    <InputBox label="Mobile number" placeholder="Your phone" onChange={(e) => { setmobile(e.target.value) }} value={mobile} edit={edit} />
                </div>
                <InputBox label="Address" placeholder="Address" onChange={(e) => { setaddress(e.target.value) }} value={address} edit={edit} />
            </div>
            <div className="flex justify-start">
                <div className="mr-6 w-full">
                    <InputBox label="Blood Group" placeholder="Blood Group" onChange={(e) => { setbloodGroup(e.target.value) }} value={bloodGroup} edit={edit} />
                </div>
                <InputBox label="Marital status" placeholder="Marital status" onChange={(e) => { setmaritalStatus(e.target.value) }} value={maritalStatus} edit={edit} />
            </div>
            <div className="pt-4">
                <div className="block text-slate-500 font-medium">
                    Note to the doctor (optional)
                </div>
                <textarea onChange={(e) => { setnote(e.target.value) }} value={note} name="message" rows={6} placeholder="Write your note...." className={`min-w-full border rounded-lg border-slate-500  text-slate-500 p-3 mt-2 ${edit ? '' : "pointer-events-none bg-slate-200"}`}  ></textarea>
            </div>
            {
                edit ?
                    <div className="mt-6 flex items-center">
                        <button
                            className="w-fit flex justify-center bg-mediumturquoise hover:bg-darkslateblue text-white font-semibold text-lg py-3 px-6 rounded-full  transition-colors duration-500 ease-out "
                            onClick={async () => {
                                const token = localStorage.getItem("token");
                                const response = await updateProfile({ token: token || "", imgPath:address, dob, gender, age: parseInt(age), mobile: parseInt(mobile), address, bloodGroup, maritalStatus, note });
                                props.setUser(response.user);
                                setEdit(false)
                            }}
                        >
                            Save Changes&nbsp;

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                        <button
                            className="w-fit flex justify-center bg-gray-400 hover:bg-darkblue text-white font-semibold text-lg py-3 px-6 ml-4  rounded-full  transition-colors duration-500 ease-out "
                            onClick={() => { setEdit(false) }}
                        >
                            Cancel &nbsp;

                        </button>
                    </div>
                    : <></>
            }
        </div>

    </div>
}