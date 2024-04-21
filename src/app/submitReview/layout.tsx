"use client"

import { checkUser } from "@/packages/actions/user/checkUser";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();
    const [valid, setValid] = useState(false);
    useEffect(() => {
        (async function () {
            const response = await checkUser();

            if (response.status === "Not Authorized") {
                toast.error("Not Authorized");
                router.push("/login")
            } else {
                setValid(true)
            }
        })();
    }, [])
    return (
        <>
            {valid ?
                <>
                    {children}
                </> :
                <></>
            }
        </>
    );
}
