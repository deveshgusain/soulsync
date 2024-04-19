"use client"

import AppBar from "@/packages/ui/components/AppBar";
import AppointmentCard from "@/packages/ui/components/Dashboard/AppointmentCard";
import PasswordChange from "@/packages/ui/components/Dashboard/Change Password/PasswordChange";
import NavCard from "@/packages/ui/components/Dashboard/NavCard";
import Information from "@/packages/ui/components/Dashboard/Profile/Information";
import StatsCard from "@/packages/ui/components/Dashboard/StatsCard";
import PageHeader from "@/packages/ui/components/PageHeader";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { getProfile } from "@/packages/actions/patient";

export default function () {
    const router = useRouter();
    const [selected, setSelected] = useState("dashboard");
    const [user, setUser] = useState<any>({});
    useEffect(() => {
        if (selected === 'logout') {
            router.push("/login");
        }
        async function getUser() {
            const token = localStorage.getItem("token");
            const response = await getProfile({ token: token || "" });
            console.log("profile Response:= ", response);

            setUser(response)
        };
        getUser();

    }, [selected])

    return <div>
        <AppBar />
        <PageHeader text="Dashboard" />
        <div className="bg-lightteal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1 m-8">
                <NavCard selected={selected} setSelected={setSelected} name={`${user.firstName} ${user.lastName}`} dob={user.dob} imgSrc={user.imgPath} />
            </div>
            <div className="col-span-1 lg:col-span-2 m-8">
                {
                    selected === 'dashboard' ?
                        <div>
                            <div className="grid grid-cols-1 xl:grid-cols-2">
                                <div className="mx-3">
                                    <StatsCard
                                        iconSVG={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-mediumturquoise ">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                        </svg>}
                                        count={user.appointments ? user.appointments.length : 0}
                                        title="Total Appointment"
                                        description="Lorem ipsum dolor amet eiusmod tempor."
                                        topImage="shape/shape-79.png"
                                        bottomImage="shape/shape-80.png"
                                    />
                                </div>
                                <div className="mx-3 mt-6 lg:mt-0">
                                    <StatsCard
                                        iconSVG={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-mediumturquois ">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                        </svg>
                                        }
                                        count={user.totalReviews}
                                        title="Reviews"
                                        description="Lorem ipsum dolor amet eiusmod tempor."
                                        topImage="shape/shape-81.png"
                                        bottomImage="shape/shape-82.png"
                                    />
                                </div>
                            </div>
                            <div className="m-3">
                                <AppointmentCard appointments={user.appointments} />
                            </div>
                        </div>
                        : selected == 'profile' ?
                            <Information
                                firstName={user.firstName}
                                lastName={user.lastName}
                                email={user.email}
                                dob={user.dob}
                                gender={user.gender}
                                age={user.age}
                                mobile={user.mobile}
                                address={user.address}
                                bloodGroup={user.bloodGroup}
                                maritalStatus={user.maritalStatus}
                                note={user.note}
                                setUser={setUser}
                            />
                            :
                            <PasswordChange />
                }
            </div>
        </div >
    </div>
}