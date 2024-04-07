"use client"
import { login } from "@/packages/actions/user";
import InputBox from "@/packages/ui/components/InputBox";
import { useState } from "react";
import { toast } from "sonner";

import Link from "next/link";

import AuthHeader from "@/packages/ui/components/AuthHeader"


export default function () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="flex justify-center bg-slate-200 min-h-screen">
            <div className="flex items-center">
                <div className="flex-col justify-center w-full h-fit p-2 ">
                    <div className="bg-white  border-r-2 rounded-lg ">
                        <AuthHeader text="Login" />
                        <div className="px-7 pt-5">
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
                            <button
                                className="my-6 flex justify-center bg-mediumturquoise hover:bg-darkslateblue text-white font-medium py-2 px-4 rounded-full w-full transition-colors duration-500 ease-out "
                                onClick={async () => {
                                    const response = await login({
                                        email,
                                        password,
                                    });
                                    console.log("Response:= ", response);

                                    if (response.error) {
                                        toast.error(response.error);
                                    } else {
                                        toast.success(response.message);
                                        localStorage.setItem("token", response.jwtToken || "");
                                    }
                                }}
                            >
                                Login Now &nbsp;

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                            <div className="flex pb-10 justify-center">
                                <div className="text-slate-500">
                                    Don't have an account?&nbsp;
                                </div>
                                <Link href={"/register"} className="text-mediumturquoise">
                                    Register Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
