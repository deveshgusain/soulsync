"use client";
import { register } from "@/packages/actions/user";
import AuthHeader from "@/packages/ui/components/AuthHeader";
import InputBox from "@/packages/ui/components/InputBox";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";


export default function () {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <div className="flex justify-center bg-slate-200 min-h-screen">
            <div className="flex items-center">
                <div className="flex-col justify-center w-full h-fit p-2 ">
                    <div className="bg-white  border-r-2 rounded-lg ">
                        <AuthHeader text="Registration" />
                        <div className="px-7 pt-5">
                            <div className="flex">
                                <div className="pr-10">
                                    <InputBox
                                        label="First Name"
                                        placeholder="Enter your name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <InputBox
                                    label="Last Name"
                                    placeholder="Enter your name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <InputBox
                                type="email"
                                label="Email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <InputBox
                                label="Password"
                                placeholder="Your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                            />
                            <InputBox
                                label="Confirm Password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="password"
                            />
                            <button
                                className="my-6 flex justify-center bg-mediumturquoise hover:bg-darkslateblue text-white font-medium py-2 px-4 rounded-full w-full "
                                onClick={async () => {
                                    if (password !== confirmPassword) {
                                        toast.error("Password is not matching");
                                    } else {
                                        const response = await register({
                                            firstName,
                                            lastName,
                                            email,
                                            password,
                                            role: "PATIENT",
                                        });
                                        console.log("Response:= ", response);

                                        if (response.error) {
                                            toast.error(response.error);
                                        } else {
                                            toast.success(response.message);
                                            localStorage.setItem("token", response.jwtToken || "");
                                        }
                                    }
                                }}
                            >
                                Register Now &nbsp;

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                            <div className="flex pb-10 justify-center">
                                <div className="text-slate-500">
                                    Already have an account?&nbsp;
                                </div>
                                <Link href={"/login"} className="text-mediumturquoise">
                                    Login Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
